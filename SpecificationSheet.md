# 🌙 Moonstar Esthetics - Web Application Specification Sheet

A comprehensive reference and development guide for the official website of Moonstar Esthetics, a professional esthetician business operated by AnaKarina Perez.

---

## 📌 Project Overview

Moonstar Esthetics is a personal, client-centered skincare studio offering a wide range of services from facial treatments and IPL therapies to waxing and body treatments. This web application aims to:

- **Target Audience**: Men and women seeking high-quality esthetician services, primarily young to middle-aged clients interested in skincare, self-care, and beauty treatments.

- **Primary Goal**: Offer a clean, responsive, and engaging interface where users can:

  - Explore all available services with detailed descriptions and pricing.
  - Learn about AnaKarina’s expertise, story, and business background.
  - View before-and-after results and client reviews.
  - Be inspired to book an appointment via a clear call-to-action.

- **Problem Solved**: Answers all questions prospective clients may have before booking, and provides a more beautiful, branded, and informative alternative to the current Setmore page.

---

## 🧱 Technical Stack

| Area           | Tech Used                                  |
| -------------- | ------------------------------------------ |
| Frontend       | HTML, CSS, JavaScript, React               |
| Styling        | CSS with Tailwind/Boostrap for inspiration |
| Dev Tools      | Vite, ESLint, Prettier                     |
| Backend        | Node.js, Express.js                        |
| Deployment     | Render                                     |
| Database       | None (static site content only)            |
| Authentication | None                                       |
| Security       | HTTPS, .env, rate limiting                 |
| APIs           | None                                       |

---

## 🎨 UI/UX Design Guidelines

### Layout & Responsiveness

- **Grid System**: 12-column grid using Flexbox or CSS Grid
- **Breakpoints**: Mobile-first design with `sm`, `md`, and `lg` breakpoints
- **Components**: Cards for services, modals for images/details, toasts for alerts

### Typography

- **Font Family**: Montserrat
- **Font Weights**: 300 (Light), 400 (Regular), 700 (Bold)

### Color Palette

#### Dark Mode:

--cream: hsl(0, 50%, 96.1%);
--secondary: hsl(300, 26%, 71%);
--blue: hsl(225, 46.5%, 75.1%);
--green: hsl(84, 61.9%, 79.4%);
--primary: hsl(261, 44.5%, 73.1%);
--dark-purple: hsl(290, 27%, 35%);
--lavender: hsl(265, 55%, 85%);
--bg-color: hsl(0, 0%, 12%);
--text-primary: hsl(0, 0%, 100%);
--text-secondary: hsl(0, 0%, 75%);
--header-footer-bg-color: hsl(0, 0%, 10%);

#### Light Mode:

--cream: hsl(0, 50%, 96.1%);
--secondary: hsl(261, 44.5%, 73.1%);
--blue: hsl(225, 46.5%, 75.1%);
--green: hsl(84, 61.9%, 79.4%);
--primary: hsl(320, 60%, 76%);
--dark-purple: hsl(290, 27%, 35%);
--lavender: hsl(265, 55%, 85%);
--bg-color: hsl(0, 0%, 98%);
--text-primary: hsl(0, 0%, 15%);
--text-secondary: hsl(0, 0%, 30%);
--header-footer-bg-color: hsl(0, 50%, 97%);

Aim for a calm, modern aesthetic with a soft, trustworthy purple branding

### Imagery & Media

- Format: JPEG, PNG, WebP, SVG for icons
- Accessibility: All images must include `alt` text
- Optimization/Compression: Use [TinyPNG](https://tinypng.com/), [ImageOptim](https://imageoptim.com/), or [Squoosh](https://squoosh.app/)

---

## 🧭 Core Features & User Flows

### 🏠 Home Page

- Spanish: Me llamo AnaKarina, tengo 25 años y soy esteticista colegiada con 5 años de experiencia en la industria de la belleza. Me especializo en faciales, depilación láser y cera. ¡Ayudar a mis clientas a sentirse seguras y radiantes es mi pasión! Ya sea que busques una piel radiante, resultados suaves o la mejor rutina de autocuidado, te tengo cubierta. ¡Estoy deseando darte la bienvenida a mi sala de tratamientos!
  Agradecida con todas mis clientas que han estado aquí a lo largo de los años

#### Quotes

- THE BEST INVESTMENT YOU CAN MAKE IS IN YOURSELF

#### List

- Esthetician Skin Care Tips:
- - Drink plenty of water
- - Apply sunscreen every day
- - Exfoliate your skin weekly
- - Invest in quality products
- - Moisturize every morning and night

#### Image Gallery

- Before and after image gallery

---

## 🔒 Basic Security Checklist

### ✅ Rate Limiting & Abuse Protection

- CAPTCHA or honeypot on contact forms (optional)
- If future backend/API is added, implement IP/user rate limits

### ✅ Environment & Secrets

- Keep all sensitive config in `.env`
- `.env` should be excluded from Git with `.gitignore`

### ✅ General Practices

- Sanitize all input fields
- Use HTTPS for secure connections
- No authentication is required for this build

---

## 💻 Design System

### 🔎 Content Tone & Voice

- Tone: Friendly, calm, modern, confident
- Audience: Primarily women, but gender-neutral overall
- Brand Personality: Young professional, warm, passionate, detail-oriented

### 📱 Target Devices & Browsers

- Devices: Mobile, Tablet, Desktop (mobile-first)
- Browsers: Latest versions of Chrome, Safari, Firefox, Edge

### ❓ Missing / To Be Determined

- Make hover effect appear only on computer screens, not on mobile
- Get a good font
- Make Information Page Google Maps API to look like the Setmore one
- When you are done, go through, try to make eveyrthing as efficient as possible.
- English, Spanish, and Portugese Translation
