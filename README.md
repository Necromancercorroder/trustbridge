# TrustBridge — Frontend (Social Impact Platform)

This repository contains the frontend preview for the Social Impact Platform (Vite + React + Tailwind).

Quick locally

- Install dependencies:

```powershell
npm install --legacy-peer-deps
```

- Start development server (hot reload):

```powershell
npm run dev
# Vite will print a local URL (e.g. http://localhost:5173 or 5175)
```

- Build production bundle:

```powershell
npm run build
```

- Preview production build locally:

```powershell
npm run preview
# Opens a production-like local server which serves dist/
```

Netlify (deployed)

This project is deployed on Netlify. The `netlify.toml` included configures the publish directory and an SPA redirect so client-side routes work.

If you want to redeploy the current `dist/` manually with the Netlify CLI:

```powershell
# login once
netlify login

# preview deploy (interactive)
netlify deploy --dir=dist

# publish production deploy
netlify deploy --prod --dir=dist --message "Manual redeploy"
```

CI/CD

To enable continuous deploys from GitHub, connect this repository in the Netlify web UI and set the build command to `npm run build` and publish directory to `dist`.

Notes

- Firebase is stubbed out for a frontend preview. If you re-enable Firebase client features, keep secrets out of source and use Netlify environment variables (Site settings → Build & deploy → Environment) and Vite env variables with the `VITE_` prefix.
- `netlify.toml` is present to ensure single-page routing works on Netlify.

Repository

https://github.com/Necromancercorroder/trustbridge
