'use client';

import Image from 'next/image';

export default function Marquee() {
  const marqueeItems = Array(6).fill("modern web designs");

  return (
    <section id="marquee">
      <div className="marquee_inner">
        {marqueeItems.map((text, index) => (
          <div key={index} className="marquee_part">
            {text}
            <div className="arrow">
              <Image src="/arrow.svg" alt="" width={80} height={60} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}