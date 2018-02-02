# Project Specification

## Design

**Required Elements**
- [ ] At least 4 images. Use `<picture>`, `<figure>`, `<figcaption>`, `<img>` when applicable.
- [ ] Title text and headers: `<h1>`, `<h2>`, etc.
- [ ] Use of the `<p>` tag for regular paragraph text.
- [ ] Find a logo `<svg>` format.

**Semantic HTML**
- [ ] Use semantic tags to add meaning to the code:
  - `<header>`
  - `<footer>`
  - `<article>`
  - `<section>`
- [ ] All `<div>` or `<section>` tags have a `CSS` class or id.

**Customize**
- [ ] Images and text.
- [ ] Placement of the elements of the page (grid layout) with `HTML`, `CSS`, or both.
- [ ] `CSS` styles applied to paragraph and heading elements.
- [ ] Utilize grid-based layout: `flexbox` layout or framework `Bootstrap`, `Foundation`

_**Note:**_
If using `Bootstrap`: the rows and columns of the grid must be wrapped in an element with a `container` class.

## Responsiveness

**Cross-Device Compatibility**
- [ ] All content is responsive and displays on all display sizes. Includes:
  - Desktop
  - Mobile: Google Nexus 5
  - Tablet: Apple iPad
- [ ] An image's associated title and text renders next to the image in all viewport sizes.
- [ ] All content is rendered on all devices. No content should be hidden on mobile devices.
- [ ] Viewport `meta` tag is included in `HTML`.
- [ ] Use media queries or classes provided with a CSS framework to ensure responsiveness of images.

_**Note:**_
Use device emulation within Chrome Developer Tools to test responsiveness in different devices and display sizes.
## Separation of Concerns

- [ ] Styles separated from `HTML`.
- [ ] File structure is organized based on functionality: `css/`, `img/`, `js/`

## Code Quality
- [ ] Adhere to both `HTML` and `CSS` respective formatting and style rules.
- [ ] Use `UTF-8` encoding: `<meta charset="uft-8">.`
- [ ] Mark todos and action items with `TODO`.
