# Classified Jewelry

A modern e-commerce storefront for hand jewelry, built with **React + Vite** and **Bootstrap**.
Custom styling lives entirely in external `.css` files (one per component/page).

## Getting started

This project uses **npm** only.

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build (output in dist/)
npm run preview  # preview the production build
npm run lint     # run Oxlint
npm run lint:fix # run Oxlint and apply safe auto-fixes
```

## Project structure

```text
classified-jewelry/
├── public/images/            # static files served as-is
├── src/
│   ├── assets/               # images and icons imported by components
│   ├── components/           # Navbar, Footer, ProductCard, HeroSlider, CollectionCard, Newsletter
│   ├── context/              # ThemeContext (light / dark mode)
│   ├── data/products.json    # product catalog
│   ├── pages/                # Home, Shop, ProductDetails, AboutUs, ContactUs
│   ├── App.jsx / App.css     # routes + page shell
│   ├── main.jsx              # entry point
│   └── index.css             # design tokens, base styles, shared classes
├── .oxlintrc.json            # Oxlint configuration
├── index.html
└── package.json
```

Every component and page folder holds its `.jsx` file next to its own `.css` file.

## Styling rules

- All CSS is in external `.css` files. No inline `style={{}}` and no `<style>` blocks in JSX.
- Colors, fonts and spacing tokens are CSS variables in `src/index.css` (light theme in `:root`,
  dark theme in `[data-theme='dark']`).
- Reusable classes (`page-container`, `section-title`, `btn-luxury`, `form-luxury`, ...) are also in
  `src/index.css`. Anything specific to one component stays in that component's CSS file.
- Bootstrap is used for the responsive product grid (`row` / `col-*`).

## Deploying to GitHub Pages

1. Push this project to a GitHub repo's `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site at
   `https://<your-username>.github.io/<repo-name>/`.

Product photos load from Unsplash; if any fail, a bundled local image is shown instead.
