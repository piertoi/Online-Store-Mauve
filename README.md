# 🌿 Mauve - Lavender Natural Products Online Store

A web e-commerce portfolio project dedicated to natural lavender products, created to demonstrate HTML, CSS, and Vanilla JavaScript skills, fully complying with the Web Techniques course requirements.

## 🎥 Video Demonstration

[![Mauve Demo Video](https://img.youtube.com/vi/PcrtNEQNZDA/maxresdefault.jpg)](https://youtu.be/PcrtNEQNZDA)
*(Click the image above to watch the full project demonstration on YouTube)*

## 🎯 Project Requirements Fulfillment

The project was developed strictly following the general minimal requirements, structured into two main parts:

### Part 1: HTML & CSS

*   **Structure & Content:** HTML and CSS codes are separated into distinct files. The website content is relevant to the theme (no "Lorem ipsum"), and **no** external frameworks or libraries (e.g., Bootstrap, Tailwind) were used.
*   **Semantic & Valid HTML:** The HTML code uses semantic tags and successfully passes W3C validation tests.
*   **Valid & Responsive CSS:** The CSS passes the W3C Jigsaw validation. The website is fully responsive, utilizing media queries, relative units (rem, em, vh, vw), and flexible displays.
*   **Advanced CSS Selection:** Basic selectors (id, class, tag) were used alongside complex selectors (descendant, child, `:nth-of-type`). Various properties were specified (width, height, color, background, font-size, border, padding, margin, display, etc.).
*   **Modern Layout:** Page layouts are built exclusively with Flexbox and CSS Grid, using columns without relying on HTML tables for structure.
*   **Interactive Elements:**
    *   Drop-down/expandable menu built purely with CSS.
    *   Complex transitions modifying multiple properties at different time intervals.
    *   CSS Animations (`@keyframes`) modifying multiple properties of the same element.
    *   *Bonus:* Usage of `::before` and `::after` pseudo-elements to generate creative and relevant visual content.

### Part 2: JavaScript, AJAX & Misc

*   **JS Organization:** The JavaScript code is placed in a separate file.
*   **DOM Manipulation & Events:**
    *   Extensive DOM manipulation (selecting elements by id, tag, class using CSS selectors).
    *   Dynamic style modifications for individual elements or groups of elements.
    *   Dynamic creation and deletion of HTML elements (especially utilized for the shopping cart functionality).
    *   Handling mouse events (click, hover) and keyboard events (keyup, keydown).
    *   Modifying element properties.
*   **Specific JS Features:**
    *   Functional inputs used in the contact form.
    *   Usage of timing functions like `setTimeout` or `setInterval`.
    *   Usage of `classList`, `target`, or `currentTarget` properties within event listeners.
    *   Usage of `getComputedStyle` and `stopPropagation` methods for precise control over calculated styles and events.
    *   Randomized modification of property values (e.g., randomly generated colors or positions).
    *   Usage of methods from standard JS classes: `Math`, `Array` (iteration/filtering methods), `String`, and `Date`.
*   **Local Storage:** Implementation of `localStorage` to keep a collection of elements, such as maintaining the shopping cart state between sessions.
*   **Form Validation:** The contact form (name, email, message) includes strict validation using **Regular Expressions (Regex)** to ensure the correct format, displaying specific error messages (e.g., missing the `@` character in the email input).
*   **AJAX & Data:**
    *   AJAX requests (using the Fetch API) to retrieve data from a local `.json` file (e.g., populating the comments/reviews section).
    *   Implementation of a session system (simulated login/logout) using Web Storage and/or JSON data retrieval.

## 🚀 How to run the project locally

Due to the usage of AJAX requests to local `.json` files, running the project through a local web server is **mandatory** to prevent CORS errors.

1.  Clone the repository:
```bash
git clone [https://github.com/piertoi/mauve.git](https://github.com/piertoi/mauve.git)
