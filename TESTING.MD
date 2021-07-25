# Testing

## Table of contents 

- [HTML W3 Code Validator](#html-w3-code-validator) 
- [W3C CSS Validator](#w3c-css-validator)
- [JS Hint](#js-hint)
- [WAVE](#wave)
- [Dev Tools](#google-chrome-developers-tools)
- [Responsiveness Testing](#responsiveness-testing)
- [Browser Compatibility](#browser-compatibility)
- [Testing User Stories](#testing-user-stories)
- [Further Testing](#further-testing)
- [Bugs](#bugs)


## [HTML W3 Code Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
The index.html and 404.html pages were tested for validation to ensure there were no HTML syntax errors in the project.

[Two warnings](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/html-val-1.JPG) were indicated, stating that `type="text/javascript"`was an unnecessary attribute so these were removed. Both [a full URI](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/html-val-2.JPG) plus additional [404 page](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/html-val-3.JPG) test returned no errors or warnings.

---
## [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
The style.css file was tested for validation to ensure there were no CSS syntax errors in the project.

The website URI [test results](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/css-val-1.JPG) only highlighted two errors from the Bootstrap library. A separate [direct input test](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/css-val-2.JPG) of the style.css file returned no errors so the project syntax is good.

---
## [JS Hint](https://jshint.com/)
JavaScript files were tested throughout the project to detect any errors and potential problems in JavaScript code.

The [cards.js](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/jshint1.JPG), [email.js](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/jshint2.JPG) and [script.js](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/jshint3.JPG) scripts were clear of any warnings and only referenced a couple of variables that were called in index.html.

The maps.js script is the longest script and threw up a few issues.
The tool was displaying numerous errors that 'const, 'let' and 'template literal syntax' is available in ES6. There was also a warning stating, "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. ($)".
Some research on [stack overflow](https://stackoverflow.com/) helped to resolve these issues by adding `/* jshint esversion: 6, jquery: true */` at the top of the JS file to tell JS Hint that the code uses ECMAScript 6 specific syntax and jQuery.

The 'google' variable used in the Google Maps API functions was flagged as undefined so a `var google;` variable was declared.

One [warning](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/jshint4.JPG) remains - see [Bugs](#bugs). 

---
## [WAVE](https://wave.webaim.org/)
The Web Accessibility Evaluation Tool was used to check the accessibility standards of the site. 

The site flagged up a few issues. Most of these were missing labels and colour contrast issues that had been missed during development. These issues were resolved. There is one labelling error and a few contrast issues [here](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/wave.JPG) but these are related to the Google Maps API and cannot be resolved. Otherwise, the site scores well. 

---
## [Google Chrome Developers Tools](https://developer.chrome.com/docs/devtools/)
- Google Dev Tools was used extensively during project development to help identify and solve any syntax issues and console errors.
- The Dev Tools [Lighthouse tool](https://developers.google.com/web/tools/lighthouse) is useful to check the performance quality of the site.
    - **Desktop** The desktop performance comes up with good scores - Performance is 91%, Accessibility is 100%, Best Practices 93% and SEO 100%. See [link](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/lighthouse-1.JPG) for a copy of the report.
    - **Mobile** The mobile Performance is lower, however, with a score of 61%. Other scores remain high, with Accessibility 100%, Best Practices 100% and SEO 100%.  The Performance score could certainly be improved, although many of the issues highlighted appear to be down to third party applications and libraries, such as Google Maps API and Bootstrap. See [link](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/lighthouse-2.JPG) for a copy of the report.
- Responsiveness of different screen sizes was continually checked during the development process to ensure that the site rendered as well as possible on differing screen sizes and orientations. Although helpful, this is not foolproof so further responsiveness testing was required.

---
## Responsiveness Testing
-   [Responsinator](https://www.responsinator.com/) was used to test the completed project on different devices. This highlighted some issues which were not apparent on Google Dev Tools, mostly involving landscape viewports. These were addressed and all devices are rendering well - please see [link](https://www.responsinator.com/?url=https%3A%2F%2Fstevekennyuk.github.io%2Faround-the-grounds%2F) for results.
- In addition to automated tests, using real devices is desirable. Thanks to friends and family, I was able to test the site on various devices, including Samsung Galaxy S8, Samsung Galaxy S9, various iPhones, iPads, Samsung Galaxy Tabs, Asus Zenbook and Lenovo ThinkPad. Results were very positive. 
The iPhone 5/SE simulation on Dev Tools does appear to still show some slight overlapping of elements but I was unable to test this on a real device. Having already spent a long time using media queries to try to resolve landscape issues on smaller devices, I feel that this would be best looked at in the future. There could be a lot of rewriting to try to accommodate an extremely small number of devices. Although ideally all devices should be accommodated, this may not always be an efficient use of resources.
- In addition, an unusual bug was noticed when testing responsiveness - please see [Bugs](#bugs).

---
## Browser Compatibility
[Autoprefixer](https://autoprefixer.github.io/) was used to add vendor browser prefixes. Manual testing was also carried out.

The site was tested on a ASUS Zenbook desktop, Samsung Galaxy mobile and iPhone 11 using various browsers.
- **Chrome** The site was developed using Chrome so works well. See [desktop screenshot](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/chrome-screenshot.JPG). Mobile view was good in portrait and landscape.
- **Mozilla Firefox** [Desktop](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/firefox-screenshot.JPG) and mobile views were good (though with the same landscape view bug).
- **Edge** [Desktop](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/edge-screenshot.JPG) and mobile views were good (though with the same landscape view bug).
- **Opera** [Desktop](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/testing/opera-screenshot.JPG) and mobile views were good (though with the same landscape view bug).