
# Netflix Movie Website Clone

A responsive static clone of the Netflix landing page built with plain HTML, Tailwind (via CDN) and vanilla JavaScript. This project is intended as a practice UI implementation to learn layout, responsive styling and simple UI interactions like carousels and accordions.

Live demo
- Open `index.html` in your browser to see the page.

What you get
- A full-page hero section with call-to-action.
- A horizontal "Trending Now" carousel with next/previous controls.
- "More reasons to join" card grid.
- FAQ accordion with toggle icons.
- Footer with links and language selector.

Tech stack
- HTML5
- Tailwind CSS (browser version via CDN)
- Vanilla JavaScript

Files of interest
- `index.html` — main markup for the page.
- `main.js` — JavaScript for the carousel and FAQ toggle logic.
- `img/` — image assets referenced by the page (logo, icons, thumbnails, background).

Usage / Run locally
1. Clone the repository:
   git clone https://github.com/madhugupta9428/Netflix_clone.git
2. Checkout the branch:
   git checkout my-new-branch
3. Open `index.html` in your browser:
   - Double-click the file, or
   - Serve with a simple static server, e.g.:
     - Python 3: `python -m http.server 8000` then visit `http://localhost:8000`
     - VS Code Live Server extension

Behavior & Controls
- Trending carousel:
  - Click the "Next" button to slide the card row to the left.
  - On first Next click a "Previous" button is dynamically added. Use it to go back.
  - Carousel movement is handled in `main.js` via transform translations.
- FAQ:
  - Click any FAQ header to toggle the answer and swap the plus/cross icons.
  - The simple toggle is implemented in `faqtoggle(button)` in `main.js`.

Notes, known issues & TODO
- Accessibility:
  - The project uses buttons and images but lacks ARIA attributes and keyboard focus management. Improving keyboard navigation and ARIA roles is recommended.
- Responsive refinements:
  - Layout values are currently set with many fixed widths and margins. Converting those to more fluid Tailwind responsive utilities will improve behavior on small screens.
- Carousel:
  - The current carousel logic uses hard-coded index transitions and creates the previous button dynamically. A more robust approach would calculate visible items based on container width and support touch/drag gestures.
- Animations:
  - FAQ show/hide uses class toggling only; an improved UX would include smooth height transitions.
- Images:
  - Replace placeholder images in `img/` with your own assets or optimized web images.

Folder structure
- index.html
- main.js
- img/ (images used by the page)
- README.md

Contributing
- This is a learning project — contributions and suggestions are welcome. Open an issue or submit a PR that improves responsiveness, accessibility, or code structure.

License
- Feel free to use this code for learning and personal projects. Add a LICENSE file if you plan to distribute or reuse it in other contexts.

Author / Contact
- Maintained by madhugupta9428

Thanks for checking out the Netflix clone! If you'd like, I can:
- Suggest improvements to the carousel logic to make it responsive,
- Add keyboard and ARIA support for accessibility,
- Or help convert the page to a component-based framework (React/Vue).
```
