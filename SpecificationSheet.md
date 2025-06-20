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

--cream: hsl(0, 50%, 96%);
--pink: hsl(300, 40%, 87%);
--blue: hsl(225, 45%, 75%);
--green: hsl(83, 62%, 80%);
--purple: hsl(290, 27%, 35%);
--lavender: hsl(268, 19%, 75%);
--bg-color: hsl(0, 0%, 12.25%);
--text-primary: hsl(0, 0%, 90%);
--text-secondary: hsl(0, 0%, 70%);
--header-footer-bg-color: hsl(0, 0%, 10%);

#### Light Mode:

--cream: hsl(35, 100%, 91%);
--pink: hsl(320, 60%, 76%);
--blue: hsl(225, 65%, 60%);
--green: hsl(140, 45%, 60%);
--purple: hsl(270, 40%, 45%);
--lavender: hsl(265, 55%, 85%);
--bg-color: hsl(0, 50%, 97%);
--text-primary: hsl(0, 0%, 15%);
--text-secondary: hsl(0, 0%, 30%);
--header-footer-bg-color: hsl(0, 50%, 95%);

Aim for a calm, modern aesthetic with a soft, trustworthy purple branding

### Imagery & Media

- Format: JPEG, PNG, WebP, SVG for icons
- Accessibility: All images must include `alt` text
- Optimization/Compression: Use [TinyPNG](https://tinypng.com/), [ImageOptim](https://imageoptim.com/), or [Squoosh](https://squoosh.app/)

---

## 🧭 Core Features & User Flows

### 🏠 Home Page

- Friendly/Professional photos
- Personal story of AnaKarina including background, education, certifications and passion for the field

#### Quotes

- RADIANT SKIN IS HERE
- THE BEST INVESTMENT YOU CAN MAKE IS IN YOURSELF

#### Featured Section

Featured services with quick descriptions:

- Dermaplaning
- IPL Laser Hair Removal
- Red Light Therapy
- Skincare Routine Steps

#### List

- Esthetician Skin Care Tips:
- - Drink plenty of water
- - Apply sunscreen every day
- - Exfoliate your skin weekly
- - Invest in quality products
- - Moisturize every morning and night

#### Image Gallery

- Before and after image gallery

#### CTA Button

- Button linking to appointment booking on Setmore

### 📍 Information Page

- Phone: (321) 352-0639

- Email: moonstaresthetics@gmail.com

- Location: 6881 Kingspointe Pkwy Suite 4, Orlando, FL 32819 (Google Maps Embed API)

- Cancellation Policy: You can cancel or reschedule up to 24 hours before the appointment time

- Hours of Operation:
- - Sunday: Closed
- - Monday: 8AM - 8:30PM
- - Tuesday: 8AM - 8:30PM
- - Wednesday: 8AM - 8:30PM
- - Thursday: 8AM - 8:30PM
- - Friday: 8AM - 8PM
- - Saturday: Closed

### ⭐ Reviews Page

User-submitted testimonials with:

- Timestamp
- Star Rating
- Reviewer Name
- Review Content

Option to leave a review and receive a discount on next visit.

### Gilmer | ⭐⭐⭐⭐⭐ | Last Year

Ana did such an amazing job on my visit. She recommended a facial and IPL laser for acne scars. She explained everything thoroughly. My face felt better and I felt confident in product use afterward. Highly recommended!

### Gabriela | ⭐⭐⭐⭐⭐ | Last Year

AnaKarina gave me a relaxing spa experience with her facial. Loved the extractions, high frequency, and massages. She also recommended personalized skincare products. Beautiful and clean studio.

### Barbara Dominguez | ⭐⭐⭐⭐⭐ | 2 Years Ago

La mejor inversión que he hecho. Resultado rápido, efectivo, atención increíble, excelente precio y ambiente relajante. ¡Me encanta! 😍

### Margaret | ⭐⭐⭐⭐⭐ | 2 Years Ago

AnaKarina explains her process clearly, listens to concerns, and recommends products. Her touch is subtle and soothing. Her sessions are incredibly relaxing. Highly recommended!

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

- Page not found
- Make footer nice and complex on big screens, switch to simple footer on small screens
- English, Spanish, and Portugese Translation
