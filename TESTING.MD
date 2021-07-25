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

[Return to Table of contents](#table-of-contents)

---
## Testing User Stories 

This project has the potential for large growth and the user stories were intended to begin the process by creating a MVP. In testing these stories, it will be shown that this has been achieved.

-  #### Site Owner/Business Goals

* As the site owner, I want features and content that will engage new users quickly, encourage them to explore the site and draw them back in the future.
	* The home page is very inviting with lively colours. The imposing hero image and use of a football icon in the hero text make it immediately clear what the site is about. The hero text also invites users to delve deeper into the site, with an intriguing and aesthetically pleasing second section to maintain interest.
* As the site owner, I want users to be able to interact with the site and easily find the information that interests them.
	* The interactive elements of the site make the user feel like they are in control and this encourages them to explore further. The interaction begins with clicking navigational links to take them to their destination, then expands to using a map to display relevant information only. The user then has the option of requesting further information via the contact page.
* As the site owner, I want to provide users with useful information without overloading them.
	* The site contains a lot of useful information but it is stored and revealed in a manner that will  not overwhelm the user nor expose them to swathes of irrelevant information. In allowing the user to choose the information that they wish to see, a smoother and more relaxed user experience is created.
* As the site owner, I want the site to be accessible to all users.
	*  The site uses assistive technology, such as aria labelling and ```sr-only``` Bootstrap classes. Semantic ```html``` is used to further assist screen readers.
* As the site owner, I want to demonstrate the value of the site to potential business partners.
	* The site not only provides useful information to users but also offers them a portal to visit the stadiums. The contact page is not simply an information provider but sets the foundations for providing a service. The attractive interactive design of the site will also alert business operatives to the number of potential customers that could be attracted to the site. The subject matter of the site is a multi-million pound industry and the site offers the owner a great opportunity to become a part of that industry.  

-  #### User Goals (general)
* As a user, I want to be immediately drawn into the site and understand its main purpose.
	* The impressive stadium image is a striking introduction to the site. The use of football imagery, the green colour scheme and even the name of the site immediately let the user know what the site is about.
* As a user, I want to be able to easily identify what I need and navigate the site to get to it.
	* The unambiguous and visible navigation links plus further links in the hero text tell the user where matters of interest are located and how to get to them. The user is in control of where they go and viewing the information that is relevant to them. The markers on the map allow them to choose which information will be displayed to them and they can further interact with the information via a clickable flip card. The floating arrow also allows them to return to the top of the page at any time.
* As a user, I want concise but informative content, displayed in an aesthetic and appealing manner.
	* The information provided is set out in a brief and snappy manner. It is not meant as an encyclopedia to overwhelm the user but rather an overview to encourage the user to seek out more. The interactive provision of the information is designed to keep the user interested and urge them to explore more.
* As a user, I want to be able to view the site clearly and intuitively on different device sizes.
	* Given the widespread use of mobile devices, the site has been built from a mobile-first perspective. The site has been thoroughly tested to ensure, as much as possible, that content layout changes fluidly depending on the screen size so that the user experience should be the same, whether on a desktop or mobile device.
* As a user, I expect the site to be fully accessible.
	* As per the business user story, accessible needs are always considered when building the site. The choice of colours and contrasts are made carefully to make the site as visible as possible. Assistive labelling measures are also employed to further illustrate that the site is designed to be used by all. The positive WAVE and Lighthouse scores reflects this.
	
-  #### User Stories (customer users)

* As a new visitor, I want to be quickly reassured that this site will be of interest to me.
	* As mentioned in the user stories above, the home page is deliberately intended to make the purpose of the site unambiguous. Imagery, colours and text content work together to achieve this goal.
* As a new visitor, I want to be able to identify the content of the site and be able to easily navigate to areas of interest e.g. can I visit the stadiums?
	* The navigation links at the top of the page are clearly set out and use striking colours (which are accessible friendly) to draw the user's attention. They are placed in a predictable position and the hamburger menu on mobile devices is equally predictable to the user.	The links use short but descriptive wording to convey their purpose.
* As a new visitor, I would like to know where the stadiums are located. 
	* The use of the Google Maps JavaScript API provides a visual representation of the stadium locations. Users can interact with the map to explore the stadium locations.	
* As a new or returning visitor, I would like to be able to interact with the site so that I can easily display only the information on the stadiums that are of interest to me.
	* It is easy for users to find and display only the information that is relevant to themselves. The introductory hero text provides the user with immediate guidance. The user can go to the map, click on the stadiums of interest and only bring up the information about those stadiums, without being subjected to extraneous details. 
* As a frequent visitor, I would like to be able to access further information on the site content, share my experiences and connect with other users of the site.
	* If further information is required, this can be obtained via the contact section. The contact form helpfully provides a dropdown menu to guide the user. The contact form also provides the user with feedback as to their actions so that they know whether their request has been received. There are also social media links at the foot of the page.

## Further Testing

-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

- Peer reviews by fellow Code Institute students, mentors and tutors helped to identify areas I may have overlooked.

-   A large amount of testing was done to ensure that all buttons, links and click events have the desired function. 

All links to external sites should open in a new tab.

**Home Page**
| Location | Type | Expected Outcome | Pass/Fail|
-----|-----|-----|-------|
Navbar | Logo | Navigate to index.html| Pass
Navbar | Home Link | Navigate to index.html | Pass
Navbar | Stadiums Link | Navigate to index.html#stadiums | Pass
Navbar | Contact Link | Navigate to index.html#contact | Pass
Hero Text | 'Interactive Map' text| Navigate to index.html#stadiums | Pass
Hero Text | 'Contact Page' text | Navigate to index.html#contact  | Pass
Stadiums Section | Map Markers | Display corresponding crest and flip cards | Pass
Stadiums Section | Flip Cards | Flip to reveal correct information| Pass
Contact Form | Input Name Required | Require Name | Pass
Contact Form | Input Name Required | Require Name | Pass
Contact Form | Input Email Required | Require Email Address Including '@' | Pass
Contact Form | Dropdown Menu | One Selection Required | Pass
Contact Form | Textarea | Require Content | Pass
Contact Form | Send Button | Require All Fields; 'Sending..' text| Pass
Contact Form | Send Button | Open Confirmation/Failure Modal| Pass
Modal | Close Button | Close Modal| Pass
Footer | Social Media Link | Open Facebook | Pass
Footer | Social Media Link | Open Instagram | Pass
Footer | Social Media Link | Open Twitter | Pass
Footer | Social Media Link | Open YouTube | Pass
Floating | Scroll To Top Button | Navigate to top of page | Pass

**404 Page**
| Location | Type | Expected Outcome | Pass/Fail|
-----|-----|-----|-------|
Navbar | Logo | Navigate to index.html| Pass
Navbar | Home Link | Navigate to index.html | Pass
Navbar | Stadiums Link | Navigate to index.html#stadiums | Pass
Navbar | Contact Link | Navigate to index.html#contact | Pass
Page Body | 'Click to return home' text | Navigate to index.html | Pass

[Return to Table of contents](#table-of-contents)