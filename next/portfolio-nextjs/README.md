# Atharva Baodhankar Portfolio - Next.js Version

This is a Next.js recreation of the original portfolio website, featuring modern React components and TypeScript.

## Features

- **Smooth Scrolling**: Implemented with Lenis for buttery smooth scroll experience
- **GSAP Animations**: Advanced animations and scroll-triggered effects
- **Swiper Integration**: Interactive project carousel
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **TypeScript**: Full type safety throughout the application
- **Modern React**: Uses React 19 with hooks and functional components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles (converted from original CSS)
│   ├── layout.tsx           # Root layout with external dependencies
│   └── page.tsx             # Main page component
├── components/
│   ├── AboutMe.tsx          # About section with animations
│   ├── Created.tsx          # "I was coded to design" section
│   ├── Ferro.tsx            # Ferro.js showcase section
│   ├── Footer.tsx           # Footer with animated text
│   ├── Hero.tsx             # Hero section with main title
│   ├── Loader.tsx           # Loading animation
│   ├── Marquee.tsx          # Scrolling marquee text
│   ├── Navbar.tsx           # Navigation with mobile menu
│   ├── Projects.tsx         # Projects carousel with Swiper
│   ├── Skills.tsx           # Skills section with animations
│   └── Work.tsx             # Contact/work section
└── hooks/
    └── useSmoothScroll.ts   # Custom hook for Lenis smooth scrolling
```

## Key Technologies

- **Next.js 15**: React framework with App Router
- **GSAP**: Animation library with ScrollTrigger
- **Lenis**: Smooth scrolling library
- **Swiper**: Modern slider library
- **TypeScript**: Type-safe JavaScript

## Original Features Recreated

- ✅ Loading animation with custom loader
- ✅ Smooth scrolling navigation
- ✅ Hero section with rotating image
- ✅ About me section with parallax effects
- ✅ Animated marquee text
- ✅ Skills section with blur-to-focus animation
- ✅ "Created" section with image animations
- ✅ Ferro.js horizontal scroll showcase
- ✅ Projects carousel with parallax effects
- ✅ Contact section with social links
- ✅ Animated footer with liquid text effect
- ✅ Responsive design for all screen sizes

## Deployment

The project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

```bash
npm run build
npm start
```

## Notes

- Font files need to be added to `public/fonts/` directory
- All images are optimized using Next.js Image component
- External libraries (FontAwesome, etc.) are loaded via CDN in layout.tsx
- GSAP ScrollTrigger is used for scroll-based animations
- Swiper handles the project carousel with parallax effects