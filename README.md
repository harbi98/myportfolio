# harvey.dev

Personal portfolio of Jan Harvey Jimenez, built with Next.js 16, React 19, and Tailwind CSS 4, exported as a static site served from the root (`/`).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to ./out
npm start       # serve ./out at http://localhost:3000
```

## Editing content

- **Projects:** `src/app/data/projects.js`. Add new works to the top of the array; the field list is documented in the file.
- **Tech stack:** `src/app/data/stack.js`. Logos are optional; items without one get a monogram tile.
- **Contact details:** the `contact` object at the top of `src/app/page.js`.
- **Design tokens (colors, fonts):** the top of `src/app/globals.css`, with light and dark values.
