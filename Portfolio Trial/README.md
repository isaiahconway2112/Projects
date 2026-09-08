# Portfolio Site

Static site — no build step, no framework. Open `index.html` directly or serve the folder.

## Edit content

- **Projects:** edit [`js/projects-data.js`](js/projects-data.js) — one object per project, no HTML editing required.
- **About / Skills / Experience / Certifications:** edit the corresponding `<section>` in [`index.html`](index.html) directly.

## Wire up the contact form

The form posts to [Formspree](https://formspree.io) (free tier, no backend needed):

1. Create a free account at formspree.io and add a new form.
2. Copy the form endpoint it gives you (`https://formspree.io/f/xxxxxxxx`).
3. In `index.html`, replace `YOUR_FORM_ID` in the `<form action="...">` attribute with your form's ID.

Until that's done, the form shows a message pointing visitors to the fallback `mailto:` link instead of submitting.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo settings, under **Pages**, set the source to the `main` branch, root folder.
3. The site will be live at `https://<username>.github.io/<repo>/`.

All paths in the site are relative, so it works from a project subpath (no custom domain required).
