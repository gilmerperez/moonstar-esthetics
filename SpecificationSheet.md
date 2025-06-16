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

- **Font Family**: To be determined
- **Font Weights**: 300 (Light), 400 (Regular), 700 (Bold)

### Color Palette

#### Normal Mode:

- Body Background: `hsl(0, 0%, 10%)`
- Footer/Header Background: `hsl(0, 0%, 5%)`
- Primary Text: `hsl(0, 0%, 100%)`
- Secondary Text: `hsl(0, 0%, 80%)`
- Purple (Primary): `hsl(261, 61%, 70%)`
- Dark Purple (Accent): `hsl(262, 33%, 46%)`
- Light Purple (Accent): `hsl(264, 58%, 85%)`

#### Light Mode:

- Body Background: `hslhsl(0, 0%, 98%)`
- Footer/Header Background: `hslhsl(0, 0%, 95%)`
- Primary Text: `hsl(0, 0%, 10%)`
- Secondary Text: `hsl(0, 0%, 40%)`
- Purple (Primary): `hsl(261, 61%, 40%)`
- Dark Purple (Accent): `hsl(262, 33%, 30%)`
- Light Purple (Accent): `hsl(264, 58%, 75%)`

Aim for a calm, modern aesthetic with a soft, trustworthy purple branding

### Imagery & Media

- Format: JPEG, PNG, WebP, SVG for icons
- Accessibility: All images must include `alt` text
- Optimization/Compression: Use [TinyPNG](https://tinypng.com/), [ImageOptim](https://imageoptim.com/), or [Squoosh](https://squoosh.app/)

---

## 🧭 Core Features & User Flows

### 🏠 Home Page

#### List

- Esthetician Skin Care Tips:
- - Drink plenty of water
- - Apply sunscreen every day
- - Exfoliate your skin weekly
- - Invest in quality products
- - Moisturize every morning and night

#### Quotes

- "RADIANT SKIN IS HERE"

- "THE BEST INVESTMENT YOU CAN MAKE IS IN YOURSELF"

#### CTA Button

- Button linking to appointment booking on Setmore

#### Image Gallery

- Before and after image gallery

#### Featured Section

- Featured services with quick descriptions

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

### 💆 Services Page

List of all services categorized. Each service should display:

- Price
- Duration
- Description
- Service Name

### Facial Treatments

- **Basic Facial** | 1h 30m | $55 | Includes facial cleansing, skin analysis, steam, exfoliation, extractions (as needed), mask, moisturizer, sunscreen.

- **Full Facial** | 1h 30m | $68 | Adds high frequency, LED light therapy, serum + massage.

- **Deluxe Facial** | 1h 30m | $80 | Includes microdermabrasion, hydrojelly mask.

- **Dermaplaning** | 1h | $55 | Minimally invasive procedure that removes top layers of skin for smoother texture and improved appearance.

- **Dermaplaning + Facial** | 1h 30m | $90 | Combines dermaplane with full facial features.

- **Rejuvenating Facial (IPL)** | 1h 30m | $100 | Includes IPL laser for skin concerns.

- **HydroDermabrasion Facial** | 1h 10m | $108 | Fluid dermabrasion, LED therapy, nourishing mask.

- **Acne Treatment Facial** | 1h 30m | $100 | Focused on acne-prone skin with extractions and IPL laser.

- **Gua Sha Facial** | 1h | $90 | Gua sha massage, LED therapy, hand massage, and more.

- **Couple's Facial** | 2h 30m | $115 | Full facial treatment for two.

- **HydroJelly Mask Add-On** | 15m | $15 | Optional enhancement.

- **Microdermabrasion Add-On** | 15m | $30 | Optional enhancement.

### Laser/IPL Services

All sessions recommended every 3 weeks. 6–8 sessions suggested. Punctuality is important for optimal results.

- **Upper Lip** | 20m | $22

- **Full Face** | 30m | $45

- **Underarms** | 30m | $38

- **Arms** | 30m | $70

- **Half Arms** | 30m | $48

- **Belly / Abdomen** | 30m | $58

- **Back** | 45m | $80

- **Bikini** | 30m | $50

- **Brazilian** | 30m | $80

- **Buttocks** | 30m | $55

- **Legs** | 1h | $85

- **Half Legs** | 50m | $55

- **Full Body** | 1h 30m | $280

- **Brazilian + Underarms** | 1h | $100

- **Chest** | 30m | $70

- **Chin** | 30m | $22

### Body Treatments

- **Back Facial** | 1h 30m | $75 | Back cleansing, steam, exfoliation, extractions, LED therapy, mask, massage, moisturizer.

### Waxing Services

- **Full Face** | 25m | $25
- **Eyebrows** | 15m | $15
- **Upper Lip** | 10m | $10
- **Cheeks** | 10m | $15
- **Underarms** | 15m | $18
- **Half Arms** | 25m | $20
- **Full Arms** | 30m | $35
- **Bikini** | 40m | $50
- **Brazilian** | 40m | $50
- **Half Legs** | 30m | $35
- **Full Legs** | 45m | $60
- **Back** | 30m | $60
- **Chest** | 30m | $55

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

### 👩 Team Page

- Friendly/Professional photos
- Personal story of AnaKarina including background, education, certifications and passion for the field

### Contact Page

Quick and easy contact form directing emails to moonstaresthetics@gmail.com

### Privacy Policy Page

### Terms of Service Page

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

- Dark/Light Mode
- Google Maps API key
- Logo and other brand assets
- English, Spanish, and Portugese Translation
