# Harshit Pachori - Portfolio

A modern, 3D-inspired, interactive portfolio built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, **Lenis smooth scrolling**, and prepared for **Cloudflare deployment via OpenNext**.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion animations + parallax interactions
- Lenis smooth scroll
- next-themes (light / dark / system)
- OpenNext Cloudflare adapter (`@opennextjs/cloudflare`)
- Wrangler CLI

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare (OpenNext)

This repo is now preconfigured for OpenNext + Workers to avoid interactive migration during CI:

- `@opennextjs/cloudflare` is installed as a dependency.
- `wrangler.jsonc` is committed.
- `open-next.config.ts` is committed.
- Cloudflare scripts exist in `package.json`.
- `public/_headers` enables long-term static caching.

### Useful commands

```bash
npm run preview
npm run deploy
npm run upload
npm run cf-typegen
```

### Notes

- Copy `.dev.vars.example` to `.dev.vars` for local adapter-aware development.
- If your CI still tries running a migration, verify it is using this repository's latest `package.json` and lockfile.
