# Portfolio Website

This repository contains the source code for my personal portfolio website. The site is a lightweight, static frontend project built to present my background, skills, and projects in a clear and maintainable way, while also serving as a practical exercise in modern frontend tooling and code quality practices.

The project intentionally avoids heavy frameworks and build systems. Instead, it focuses on clean HTML, CSS, and JavaScript, with automated formatting and linting to keep the codebase consistent and easy to work with over time.

---

## Project Overview

The portfolio website includes:

* A responsive layout built with HTML and CSS
* Custom styling layered on top of Bootstrap
* Small JavaScript enhancements for navigation and interaction
* A custom web font setup
* A modern development workflow using Prettier, ESLint, and Stylelint

The site is designed to be simple to deploy (for example, via GitHub Pages) and easy to extend as new sections or projects are added.

---

## Tech Stack

### Core Technologies

* **HTML5** – semantic markup
* **CSS3** – custom styles and layout
* **JavaScript (ES2021)** – browser-side interactivity
* **Bootstrap** – responsive layout utilities and components
* **jQuery** – small DOM interactions and event handling

### Tooling

* **Prettier** – automatic code formatting
* **ESLint (flat config)** – JavaScript linting and best practices
* **Stylelint** – CSS linting and consistency checks
* **npm** – dependency and script management
* **VS Code** – primary development environment

---

## Project Structure

```text
.
├── css/
│   ├── styles.css        # Main site styles
│   └── satoshi.css       # Custom font definitions
├── js/
│   ├── navbarClose.js
│   ├── navbarShadow.js
│   ├── preventSectionClose.js
│   └── scroll.js
├── index.html            # Main entry point
├── eslint.config.mjs     # ESLint flat configuration
├── .prettierrc.json      # Prettier configuration
├── .stylelintrc.json     # Stylelint configuration
├── package.json
└── README.md
```

---

## Code Quality & Formatting

This project uses a clear separation of responsibilities between tools:

* **Prettier** handles *all formatting* (HTML, CSS, JavaScript, JSON)
* **ESLint** focuses on JavaScript correctness and potential bugs
* **Stylelint** focuses on CSS correctness and maintainable patterns

Formatting is applied automatically on save in VS Code, while linting can be run manually or via npm scripts.

### npm Scripts

```bash
npm run format      # Format all supported files using Prettier
npm run lint        # Run both JavaScript and CSS linters
npm run lint:js     # Run ESLint only
npm run lint:css    # Run Stylelint only
```

---

## Development Notes

* JavaScript is written for the browser environment and loaded via `<script>` tags.
* jQuery is provided globally (via CDN), and ESLint is configured accordingly.
* CSS rules favor clarity and maintainability over strict theoretical ordering.
* The tooling setup is intentionally simple and suitable for small to medium static sites.

---

## Goals

The goals of this project are:

* Present a clean and professional personal portfolio
* Demonstrate attention to code quality and maintainability
* Use modern tooling without unnecessary complexity
* Keep the project easy to understand for future contributors or reviewers

---

## License

This project is for personal use and demonstration purposes. Feel free to explore the code for learning or inspiration.
