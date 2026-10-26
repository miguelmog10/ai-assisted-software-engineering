# Launch carousel (v1.0)

LinkedIn carousel for the launch post: 10 slides, 1080 x 1350 px, rendered from `carousel.html`.

- `carousel.html` is the source. Colors are design tokens with three themes: `neutral` (used for the post), `light` and `dark`. Open it in a browser with `?theme=dark` to preview a theme.
- `render.js` renders one PDF per theme into `pdf/`: `node render.js pdf` (needs Node and Playwright with Chromium).
- `social-preview.html` is the GitHub social preview card (1280 x 640); `render.js` also renders it to `social-preview.png`.
- `chef-hat.svg` is the chef hat on slide 10, designed by Miguel in Figma.
- `fonts/` holds Lora and Inter, both under the SIL Open Font License 1.1 (see `fonts/OFL.txt`).

All text pairs meet WCAG AA contrast in every theme.
