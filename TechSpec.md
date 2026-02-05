# Maruti Overseas - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTAs, form submission | `npx shadcn add button` |
| Card | Service cards, testimonial cards | `npx shadcn add card` |
| Input | Form fields | `npx shadcn add input` |
| Textarea | Contact form message | `npx shadcn add textarea` |
| Select | Country dropdown | `npx shadcn add select` |
| Badge | Trust badges, labels | `npx shadcn add badge` |
| Carousel | Testimonials, certificates | `npx shadcn add carousel` |
| Dialog | Modal popups | `npx shadcn add dialog` |
| Sheet | Mobile navigation | `npx shadcn add sheet` |
| Separator | Visual dividers | `npx shadcn add separator` |
| Accordion | FAQ section | `npx shadcn add accordion` |
| Tabs | Service details | `npx shadcn add tabs` |
| ScrollArea | Custom scroll containers | `npx shadcn add scroll-area` |
| Skeleton | Loading states | `npx shadcn add skeleton` |

### Third-Party Registry Components
| Component | Registry | Purpose | Installation |
|-----------|----------|---------|--------------|
| @magicui/marquee | magicui | Certificate/logo scroll | `npx shadcn add @magicui/marquee` |
| @aceternity/timeline | aceternity | Process timeline | `npx shadcn add @aceternity/timeline` |
| @react-bits/text-rotate | react-bits | Animated headlines | Manual install |

### Custom Components to Build
| Component | Location | Purpose |
|-----------|----------|---------|
| AnimatedCounter | `components/animated-counter.tsx` | Stats number animation |
| FloatingOrbs | `components/floating-orbs.tsx` | Hero background decoration |
| ScrollReveal | `components/scroll-reveal.tsx` | Intersection observer wrapper |
| GradientText | `components/gradient-text.tsx` | Text with gradient animation |
| MagneticButton | `components/magnetic-button.tsx` | Button with hover magnetic effect |
| CountryCard | `components/country-card.tsx` | 3D country card with hover |
| ServiceCard | `components/service-card.tsx` | Service card with flip animation |
| TestimonialCarousel | `components/testimonial-carousel.tsx` | 3D testimonial slider |
| ProcessTimeline | `components/process-timeline.tsx` | SVG animated timeline |
| ContactForm | `components/contact-form.tsx` | Form with validation |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Header glassmorphism on scroll** | CSS + React state | useScroll hook, toggle class | Low |
| **Logo 3D flip entrance** | Framer Motion | rotateY animation on mount | Medium |
| **Nav items stagger drop** | Framer Motion | staggerChildren in variants | Medium |
| **Hero headline clip reveal** | GSAP | SplitText + clip-path animation | High |
| **Hero image 3D entrance** | Framer Motion | rotateY + translateX + opacity | Medium |
| **Floating orbs animation** | CSS @keyframes | translateY/translateX infinite | Low |
| **CTA button pulse glow** | CSS @keyframes | box-shadow pulse infinite | Low |
| **About image circle reveal** | GSAP | clip-path circle animation | Medium |
| **Stats counter animation** | Custom hook | useCountUp with IntersectionObserver | Medium |
| **Service cards 3D flip** | Framer Motion | rotateY with perspective container | High |
| **Country carousel horizontal scroll** | GSAP ScrollTrigger | Horizontal scroll with pin | High |
| **Country card 3D depth** | CSS transform | translateZ on active card | Medium |
| **Process timeline SVG draw** | GSAP | stroke-dashoffset animation | Medium |
| **Process steps stagger slide** | Framer Motion | Alternating left/right entrance | Medium |
| **Testimonials 3D carousel** | Framer Motion | rotateY carousel with perspective | High |
| **Certificate marquee scroll** | @magicui/marquee | Built-in infinite scroll | Low |
| **Contact form 3D tilt** | Framer Motion | rotateX on entrance | Medium |
| **Footer links stagger** | Framer Motion | staggerChildren variants | Low |
| **Button magnetic hover** | CSS transform | :hover with translate | Low |
| **Card hover lift** | CSS transition | translateY + shadow on :hover | Low |
| **Scroll-triggered reveals** | GSAP ScrollTrigger | Intersection-based animations | Medium |

---

## Animation Library Choices

### Primary: GSAP + ScrollTrigger
**Use for:**
- Complex scroll-triggered animations
- Timeline sequences
- SVG path animations
- Horizontal scroll sections
- Pinning effects

**Installation:**
```bash
npm install gsap @gsap/react
```

### Secondary: Framer Motion
**Use for:**
- React component animations
- Gesture-based interactions
- AnimatePresence for mount/unmount
- Variants for stagger effects
- Layout animations

**Installation:**
```bash
npm install framer-motion
```

### Tertiary: CSS Animations
**Use for:**
- Simple hover effects
- Continuous ambient animations
- Performance-critical micro-interactions
- Reduced motion fallbacks

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── app/
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Countries.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── animated-counter.tsx
│   │   ├── floating-orbs.tsx
│   │   ├── scroll-reveal.tsx
│   │   ├── gradient-text.tsx
│   │   ├── magnetic-button.tsx
│   │   ├── country-card.tsx
│   │   ├── service-card.tsx
│   │   ├── testimonial-carousel.tsx
│   │   ├── process-timeline.tsx
│   │   └── contact-form.tsx
│   ├── hooks/
│   │   ├── use-scroll.ts
│   │   ├── use-count-up.ts
│   │   └── use-in-view.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── globals.css
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   └── ui/           # shadcn components
├── public/
│   ├── images/       # Generated/downloaded images
│   └── fonts/        # Custom fonts if needed
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Dependencies to Install

### Core Dependencies
```bash
# Animation libraries
npm install gsap @gsap/react framer-motion

# Icons
npm install lucide-react

# Utilities
npm install clsx tailwind-merge
npm install class-variance-authority
```

### shadcn Components
```bash
# Core UI
npx shadcn add button card input textarea select badge carousel dialog sheet separator accordion tabs scroll-area skeleton

# Third-party
npx shadcn add @magicui/marquee
```

### Google Fonts (in layout.tsx)
```tsx
import { Poppins, Open_Sans } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-open-sans',
})
```

---

## CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --primary-blue: #1e3c72;
  --primary-blue-dark: #2a5298;
  --primary-blue-light: #4a6fa5;
  --accent-orange: #ff6b35;
  --accent-orange-light: #ff8c5a;
  --accent-yellow: #f7931e;
  
  /* Neutral Colors */
  --white: #ffffff;
  --light-gray: #f5f7fa;
  --medium-gray: #e8ecf1;
  --dark-gray: #4a5568;
  --text-dark: #2d3748;
  --text-light: #718096;
  --border-gray: #e2e8f0;
  
  /* Status Colors */
  --success: #48bb78;
  
  /* Animation Easings */
  --ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-expo-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-dramatic: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-liquid: cubic-bezier(0.23, 1, 0.32, 1);
  
  /* Animation Durations */
  --duration-micro: 150ms;
  --duration-fast: 300ms;
  --duration-medium: 500ms;
  --duration-slow: 800ms;
  --duration-cinematic: 1200ms;
}
```

---

## Tailwind Configuration Extensions

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... existing config
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        opensans: ['var(--font-open-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e3c72',
          dark: '#2a5298',
          light: '#4a6fa5',
        },
        accent: {
          orange: '#ff6b35',
          'orange-light': '#ff8c5a',
          yellow: '#f7931e',
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(0) translateX(0)' },
          '75%': { transform: 'translateY(15px) translateX(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
};

export default config;
```

---

## Performance Optimization Strategy

### Image Optimization
- Use Next.js Image component for all images
- Implement lazy loading for below-fold images
- Use WebP format with JPEG fallback
- Set appropriate sizes and srcset

### Animation Performance
- Use `transform` and `opacity` only for animations
- Apply `will-change` strategically before animations
- Use CSS containment for animated sections
- Implement `content-visibility: auto` for off-screen content

### Code Splitting
- Lazy load heavy animation components
- Dynamic import for GSAP (client-side only)
- Split sections into separate chunks

### Critical CSS
- Inline critical styles for above-fold content
- Defer non-critical CSS loading

---

## Accessibility Requirements

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Management
- Visible focus indicators on all interactive elements
- Skip to main content link
- Logical tab order

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for icon-only buttons
- Alt text for all images

---

## Browser Support

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Progressive Enhancement
- Core content accessible without JS
- Animations enhance but don't block content
- Graceful degradation for older browsers
