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