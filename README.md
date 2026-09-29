# Hombali Vasisht

Portfolio website for a Bengaluru architecture practice. Content, photography, and contact details are structured so they can be replaced without rewriting the layout.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Edit the practice

- `src/data/site.ts` — name, biography, contact, services, philosophy, awards
- `src/data/projects.ts` — projects
- `src/data/journal.ts` — essays
- `src/lib/media.ts` — image URL helper

Photographs currently load from Unsplash as placeholders. The contact form validates in the browser and does not send email yet.
