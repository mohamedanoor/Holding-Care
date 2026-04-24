# Holding Care — holdingcare.co

Business website for Holding Care, LLC — a personal care assistance company based in Portland, Maine.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Lato/Merriweather** fonts.
Contact and career forms powered by **Resend**. Deployed on **Vercel**.

---

## Pages

- **Home** — Hero, Why Choose Us, Services preview, Contact strip
- **About** — Company story, mission, core values
- **Services** — Full service listings with detail cards
- **Careers** — PSS job posting and application form
- **Contact** — Contact form with address and hours

---

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Resend (contact & application forms)
- Vercel (hosting)

---

## Local Development

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
| `RESEND_API_KEY` | Resend API key from [resend.com](https://resend.com) |

---

## Deployment

Deployed automatically to Vercel on every push to `main`.
Live at [holdingcare.co](https://holdingcare.co).