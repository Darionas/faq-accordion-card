# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

Issue: CSS mobile is not working

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![FAQ_accordion_card](./images/faq_accordion_card.png)

### Links

- Solution URL: (https://github.com/Darionas/faq-accordion-card)
- Live Site URL: (https://darionas.github.io/faq-accordion-card/)

## My process

* Set HTML layout:
  * create flexbox to contain all image elements on the left side and accordion card on the right side.
* Create CSS external file to set style for HTML layout:
  * Choose to use responsive web design:
    * include meta viewport element in my web page.
    * use rem css unit for all HTML elements.
    * use media queries to set breakpoint for mobile devices.
  * Use css techniques to center vertically or horizontally.
  * Use overflow property to hide some image elements parts, which are over the container.
  * Use z-index property to front one of overlap elements.
  * Use transition property which allows to change property values smoothly, over a given duration 
* Create external JavaScript file:
  * Loop all accordions buttons
  * When 'click' event occurs on one of accordions execute anonymous function
  * It lets toggle icons and accordion's hidden/shown elements.

### Built with

It is based on:

- Semantic HTML5 markup
- CSS (RWD):
  - Flexbox
  - overflow
  - z-indexs
  - transition
  - css unit (rem)
  - media queries
- JavaScript:
  - toggle icons and accordion's hide/show element

### What I learned

In this challange I learned:

- Positioning images
- Set z-index property on elements
- create hoverable, interactive accordion's to hide/show it's elements.
- Set media queries for mobile devices (break point at max-widt: 830px when interface not fit to desctop)

### Continued development

- Markdown Guide.
- JavaScript.

### Useful resources

- [w3schools](https://www.w3schools.com/css/css_positioning.asp) - This helped me for positioning elements.
- [w3schools](https://www.w3schools.com/css/css_z-index.asp) - This lets me set priorities for elements, which element should be placed in front of, or behind, the others.
- [w3schools](https://www.w3schools.com/css/css3_mediaqueries.asp) - It lets me ajust screen for mobile devices at specified breakpoint.
- [JSFiddle](https://jsfiddle.net/o6j49dcy/) - This is a perfect example how to employ javaScript to make accordions interactive.

## Author

- Frontend Mentor - [@Darionas](https://www.frontendmentor.io/profile/Darionas)

## Acknowledgments

Thank you Frontend Mentor team for opportunity to try, practice, train yourself in different level challenges and gain invaluable experience.
