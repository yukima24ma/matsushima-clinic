# 松島医院 Website

Public website for 松島医院, a clinic in 西宮市甲子園口. The site is built with Next.js and includes clinic information, departments, doctor profile, access details, news, local SEO metadata, sitemap, robots.txt, and structured data.

Live site:

https://www.matsushima-koshienguchi.com

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel hosting

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

Then start the production server locally:

```bash
npm run start
```

## Project Structure

- `app/` - Next.js routes, metadata, sitemap, robots, and page styles
- `components/` - site sections such as hero, departments, doctors, access, news, and footer
- `lib/seo.ts` - shared site metadata and clinic SEO constants
- `public/` - static images and public assets

## Deployment

The site is deployed on Vercel. Current public alias:

```text
https://www.matsushima-koshienguchi.com
```

The root domain `https://matsushima-koshienguchi.com` redirects to the `www` domain.
