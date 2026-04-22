# Holding Care — Website

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Geist** font.
Contact and career forms powered by **Resend**. Deploy target: **Vercel**.

---

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# Add your Resend API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |

---

## Adding Your Logo

1. Save your logo file as `public/logo.png`
2. Open `components/layout/Navbar.tsx`
3. Find the comment that says `Drop your logo PNG at public/logo.png and uncomment this:`
4. Uncomment the `<Image>` tag and delete the text-based fallback below it

---

## Adding Real Photos

Every photo spot is marked with an `<ImagePlaceholder>` component that shows
a dashed box with a description of what photo goes there.

To replace one:
1. Save your photo to the `public/` folder (e.g. `public/hero.jpg`)
2. Find the `<ImagePlaceholder>` component in the relevant file
3. Replace it with:

```tsx
import Image from "next/image";

<div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
  <Image
    src="/hero.jpg"
    alt="Description of photo"
    fill
    className="object-cover"
  />
</div>
```

Photo spots by page:
- **Home** — Hero section (caregiver with client)
- **About** — Our Story section, Mission section

---

## Adding More Services

Edit `lib/services-data.tsx` — add a new object to the `services` array.

---

## Deploying to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add `RESEND_API_KEY` under Settings → Environment Variables
4. Deploy

---

## File Structure

```
app/
  layout.tsx              Root layout — Geist font, Navbar, Footer
  page.tsx                Home (Hero, WhyChooseUs, ServicesPreview, ContactStrip)
  about/page.tsx          About — story, mission, values
  services/page.tsx       Services — full service listings
  careers/page.tsx        Careers — job posting + apply form
  contact/page.tsx        Contact — form + address/hours
  api/contact/route.ts    POST endpoint → Resend (contact form)
  api/apply/route.ts      POST endpoint → Resend (job applications)
  icon.svg                Favicon

components/
  layout/
    Navbar.tsx            Fixed nav with phone number top bar + mobile menu
    Footer.tsx            Dark footer with links and contact info
  ui/
    FadeIn.tsx            Scroll-triggered fade-in wrapper
    ImagePlaceholder.tsx  Swap-ready photo placeholder
  home/
    Hero.tsx              Full hero section with CTA buttons
    WhyChooseUs.tsx       Three-pillar "why choose us" section
    ServicesPreview.tsx   Four-card services overview grid
    ContactStrip.tsx      Blue CTA strip with contact info
  services/
    ServiceCard.tsx       Individual service card with details
  careers/
    ApplyForm.tsx         Job application form → /api/apply
  contact/
    ContactForm.tsx       Contact form → /api/contact

lib/
  services-data.tsx       All service content — edit here to update services

public/
  logo.png                ← Drop your logo here
```
