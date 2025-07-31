// VanillaTilt implementation for Next.js
interface TiltSettings {
  reverse?: boolean;
  max?: number;
  startX?: number;
  startY?: number;
  perspective?: number;
  easing?: string;
  scale?: number;
  speed?: number;
  transition?: boolean;
  axis?: string | null;
  glare?: boolean;
  'max-glare'?: number;
  'glare-prerender'?: boolean;
  'full-page-listening'?: boolean;
  'mouse-event-element'?: HTMLElement | null;
  reset?: boolean;
  'reset-to-start'?: boolean;
  gyroscope?: boolean;
  gyroscopeMinAngleX?: number;
  gyroscopeMaxAngleX?: number;
  gyroscopeMinAngleY?: number;
  gyroscopeMaxAngleY?: number;
  gyroscopeSamples?: number;
}

export class VanillaTilt {
  private element: HTMLElement;
  private settings: TiltSettings;
  private reverse: number;
  private width: number = 0;
  private height: number = 0;
  private left: number = 0;
  private top: number = 0;
  private updateCall: number | null = null;
  private event: MouseEvent | null = null;

  constructor(element: HTMLElement, settings: TiltSettings = {}) {
    if (!(element instanceof Node)) {
      throw new Error("Can't initialize VanillaTilt because element is not a Node.");
    }

    this.element = element;
    this.settings = this.extendSettings(settings);
    this.reverse = this.settings.reverse ? -1 : 1;
    
    this.updateElementPosition();
    this.addEventListeners();
    this.reset();
  }

  static init(elements: NodeListOf<Element> | Element[] | Element, settings: TiltSettings = {}) {
    if (elements instanceof Node) {
      elements = [elements];
    }
    if (elements instanceof NodeList) {
      elements = Array.from(elements);
    }
    if (Array.isArray(elements)) {
      elements.forEach((element: Element) => {
        if (!('vanillaTilt' in element)) {
          (element as HTMLElement & { vanillaTilt: VanillaTilt }).vanillaTilt = new VanillaTilt(element as HTMLElement, settings);
        }
      });
    }
  }

  private extendSettings(settings: TiltSettings) {
    const defaultSettings = {
      reverse: false,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "full-page-listening": false,
      "mouse-event-element": null,
      reset: true,
      "reset-to-start": true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    };

    const newSettings: TiltSettings = {};
    for (const property in defaultSettings) {
      if (property in settings) {
        (newSettings as Record<string, unknown>)[property] = (settings as Record<string, unknown>)[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        const attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          (newSettings as Record<string, unknown>)[property] = JSON.parse(attribute!);
        } catch {
          (newSettings as Record<string, unknown>)[property] = attribute;
        }
      } else {
        (newSettings as Record<string, unknown>)[property] = (defaultSettings as Record<string, unknown>)[property];
      }
    }

    return newSettings;
  }

  private addEventListeners() {
    this.element.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  private onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  }

  private onMouseMove(event: MouseEvent) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }
    this.event = event;
    this.updateCall = requestAnimationFrame(this.update.bind(this));
  }

  private onMouseLeave() {
    this.setTransition();
    if (this.settings.reset) {
      requestAnimationFrame(this.reset.bind(this));
    }
  }

  private reset() {
    this.onMouseEnter();
    this.event = {
      clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
      clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
    } as MouseEvent;

    const scale = this.settings.scale;
    this.settings.scale = 1;
    this.update();
    this.settings.scale = scale;
  }

  private getValues() {
    if (!this.event) return { tiltX: 0, tiltY: 0, percentageX: 0, percentageY: 0, angle: 0 };

    let x = (this.event.clientX - this.left) / this.width;
    let y = (this.event.clientY - this.top) / this.height;

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    return {
      tiltX: (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2),
      tiltY: (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2),
      percentageX: x * 100,
      percentageY: y * 100,
      angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
    };
  }

  private updateElementPosition() {
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  private update() {
    const values = this.getValues();

    this.element.style.transform = 
      "perspective(" + this.settings.perspective + "px) " +
      "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
      "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
      "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    this.updateCall = null;
  }

  private setTransition() {
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    setTimeout(() => {
      this.element.style.transition = "";
    }, this.settings.speed);
  }
}

// Auto-initialize elements with data-tilt attribute
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  });
}