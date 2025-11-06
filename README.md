# Zvpply Redirect

Simple redirect service that redirects `zvpply.com` to `zachmcnair.com`.

## How it works

Uses Next.js middleware to detect requests to `zvpply.com` or `www.zvpply.com` and permanently redirects (301) them to the same path on `zachmcnair.com`.

## Tech Stack

- Next.js 15
- TypeScript

## Development

```bash
npm run dev
```

## Deployment

Deployed on Vercel. Both domains (`zvpply.com` and `zachmcnair.com`) should be configured in your Vercel project settings.
