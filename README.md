# Around The Grounds
  
 
This website has been created for my Interactive Frontend Development Milestone 2 project, the second project on the [Code Institute Diploma in Software Development](https://codeinstitute.net/) course.

This project introduces interactivity through the use of JavaScript. The aim is to demonstrate the ability to create a Frontend site which allows users to actively engage with data and alter the way information is displayed in order to achieve their preferred goals.  

'Around The Grounds' provides the locations of the English Premier League football grounds in the London area, displayed using Google Maps. The primary aim is to allow users to locate their desired ground(s), display information about their selected ground(s) and request further information, including tour details, using a Contact form.

## [View the live project here.](https://stevekennyuk.github.io/around-the-grounds/)

![Mock-up](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/mock-up.JPG)

# Table of contents  

-  [UX](#ux)

	-  [Project Strategy](#project-strategy)

		-  [Site Owner/Business Goals](#site-ownerbusiness-goals)

		-  [User Goals (general)](#user-goals-general)

		-  [User Stories (customer users)](#user-stories-customer-users)

	-  [Project Scope](#project-scope)

		-  [Strategy Trade-off](#strategy-trade-offs)
	
	-  [Project Structure](#project-structure)

		-  [Page Structure](#page-structure)

		-  [Visibility](#visibility)

		-  [Navigation](#navigation)

		-  [Buttons and Links](#buttons-and-links)

		-  [Iconography](#iconography)

	-  [Project Design](#project-design)

		-  [General Layout](#general-layout)

		-  [Colour Scheme](#colour-scheme)

		-  [Typography](#typography)

		-  [Imagery](#imagery)

		-  [Wireframes](#wireframes)  

-  [Features](#features)

	-  [Existing Features](#existing-features)

	-  [Future Features](#future-features)

-  [Technologies Used](#technologies-used)

-  [Testing](#testing)

-  [Deployment](#deployment)

-  [Credits](#credits)
## User Experience (UX)

---

This application will follow the principles of User Centred Design (UCD), which will focus on placing users at the centre of the design and development process.
 
This site has two principal user goals to consider.

1.  **Site/Business Owners** - the interests of the site/business owners are twofold. The primary focus is to provide users with information about London Premier League football grounds and encourage them to book official tours to the grounds. The second aim is to work towards creating and expanding a business by impressing the value of the website on football club business operatives, encouraging future partnerships to promote and sell their tours.

2.  **Site Users** - the main focus of the site will be to provide information to users about London Premier League football grounds. It is anticipated that the vast majority of users will already have some interest in football. However, there will be other users with little previous interest in the game who would find the site useful e.g. visitors to London. Either way, it is expected that most users would rely on mobile devices to view the website. I am drawing on the experience of myself and friends as followers of football and users of football related sites to create the user goals for this site.
  

### Project Strategy
---
-  #### Site Owner/Business Goals

	* As the site owner, I want features and content that will engage new users quickly, encourage them to explore the site and draw them back in the future.

	* As the site owner, I want users to be able to interact with the site and easily find the information that interests them.
	
	* As the site owner, I want to provide users with useful information without overloading them.

	* As the site owner, I want the site to be accessible to all users.
	
	* As the site owner, I want to demonstrate the value of the site to potential business partners.

  

-  #### User Goals (general)

	* As a user, I want to be immediately drawn into the site and understand its main purpose.

	* As a user, I want to be able to easily identify what I need and navigate the site to get to it.

	* As a user, I want concise but informative content, displayed in an aesthetic and appealing manner.

	* As a user, I want to be able to view the site clearly and intuitively on different device sizes.

	* As a user, I expect the site to be fully accessible.

-  #### User Stories (customer users)

	* As a new visitor, I want to be quickly reassured that this site will be of interest to me.

	* As a new visitor, I want to be able to identify the content of the site and be able to easily navigate to areas of interest e.g. can I visit the stadiums?
	
	* As a new visitor, I would like to know where the stadiums are located. 
	
	* As a new or returning visitor, I would like to be able to interact with the site so that I can easily display only the information on the stadiums that are of interest to me.

	* As a frequent visitor, I would like to be able to access further information on the site content, share my experiences and connect with other users of the site.


### Project Scope

---

Looking at the User and Owner/Business Goals, there are plenty of features and content which could be included in the site to attempt to satisfy all their needs. However, a number of factors limit what would be possible or desirable to include in the first development stage.

The main constraints are time and the current technological expertise of the developer. The decisions made at this stage are designed to avoid making the scope too large, such that the project becomes overloaded and fails to meet deadlines or making it too small, such that there is an unimpressive end result.

The first development stage aims to create a Minimal Viable Product, providing users with the core requirements that they actually need. Additional features can be added at future developmental stages, once feedback has been received from the initial site features.  

The features to include in this first development stage will be determined by creating a strategy trade-off table, drawing on the user goals and needs.

 #### Strategy Trade-offs

 Opportunity | Importance | Viability
----------- | ---------- | ---------
Clear and intuitive navigational links | 5 | 5
Interactive map displaying locations | 5 | 5
User-controlled display of information on each stadium | 5 | 5 
Functioning additional information form for users | 5 | 5
Responsive for all device sizes | 5 | 5
Social media links | 4 | 5
Facilities around the stadiums | 4 | 3
Direct ticket booking system | 4 | 1
Individual pages for each stadium | 3 | 3

The higher feasibility elements will be incorporated in this first stage of development.

[Return to Table of contents](#table-of-contents)

### Project Structure
---
The structural design of the site aims to make the user interaction with the site as easy and as comfortable as possible. This is achieved by creating meaningful relationships between the various site elements so that users can intuitively understand their meaning and purpose.

The principles of Interactive Design (IxD) promote consistency, predictability, visibility, learnability and feedback as central to the above aim. The structure of this site aims to follow these principles.  

-  #### Page Structure

	- As the first developmental stage of this project will follow a MVP pathway, it is felt that a single HTML page would suit best. The use of interactive elements will enable the user to make changes to the page content without changing the overall size of the page. The desire is to make the user experience more comfortable by simply scrolling down one relatively compact page rather than moving between separate pages. A smooth scrolling style will reinforce this. Once the site evolves as desired, additional pages can be added e.g. each stadium having a dedicated page with further information and features. 

	- The 'Home' page will immediately address some of the user goals, with clear directions to desired content through navigation links, calls to action and meaningful images. These are consistent with previous user experiences on other sites.

	- The main user goals will be addressed in the 'Stadiums' section, which follows the 'Home' section. This section will have an individual background image and link in the navigation bar, which is again predictable and consistent with previous user experience. The relationship between site and user is key in this section, with buttons and prompts in place to assist with the user's interactive experience.

	- A separate contact section is also expected. The 'Contact' section allows for a contact form where users can request further information, particularly regarding stadium tours. Input fields will react to user actions, which will provide reassuring feedback to the user. As the site develops and expands, this section would most likely have its own dedicated page as user expectations would change.

	- Time permitting, it is the intention to create a separate 404 error page in the event of a broken link or server error. This feedback adds reassurance to the user and provides them with clear instructions on how to return to the site.

  
-  #### Visibility

	- The location and purpose of elements should be clear to users. Where appropriate, a scroll down arrow will be employed to indicate to the user that useful content is below. There will also be a floating scroll up arrow so users can return to the top of the screen with a single click from anywhere on the page. The smooth scroll styling will enable the user to understand the page layout and where the various elements are located. In addition, there will be partial overlay of elements on the screens to hint to the user that there is more content below.
  
-  #### Navigation

	- The site navigation will again be consistent and predictable by following the convention of the site logo on the top left with a horizontal navigation bar to the right of the logo. As there is not a large number of pages to navigate through, this is the most appropriate method. The user will only need one click to reach the required destination. Should the site evolve in the future, a more appropriate navigation system could be considered.

	- It is felt that a fixed navigation bar will not be required for the single page site. The navigation links and floating scroll up arrow will reduce the amount of scrolling required by the user.

	- The navigation bar will be responsive and will use a hamburger menu for smaller devices. This is consistent and predictable with most sites on mobile devices. The menu will then push the page content down when activated to maximise visibility of the options.  

-  #### Buttons and Links

	- Buttons and links will be used to create a smoother navigation process for the user. The purpose of these must be made clear to the user. Buttons and links will react when the mouse hovers over them. This conventionally suggests that clicking on the button or link will make something happen. The use of unambiguous text or iconography will make it clear to the user what will happen when the button or link is clicked.

	- Styling the buttons and links in a consistent manner and employing the same reaction when e.g. the mouse hovers will help the user to learn and predict what they need to do to achieve their goals.

	- When a button is clicked, the user will be provided with some feedback to reassure them that their action has been acknowledged. This will be either a change in the button appearance or a confirmation message. This builds trust with the user.
  

-  #### Iconography

	- Icons will be used to help users to quickly identify content matter. A visual representation can say more than words and often stands out more. A quick scan of the page will pick out icons and well chosen ones will stand out and immediately assure the user as to the associated content.

	- The site logo acts in a similar fashion and the user quickly learns to associate the image with the site and its purpose. A favicon, using an image of a football, will be also be added. This is now generally expected by users and helps them to identify the site if they have several pages open.

### Project Design

---

The layout and content of the site has been designed with the User Experience at the forefront. The typical user will be someone interested in football. The site therefore needs to engage with this type of user and make them feel at ease. The design needs to be lively and employ concepts with which these users are familiar.

  

-  #### General Layout

	- The design will broadly follow the 'rule of thirds' to provide a visually comforting experience to the user. Where appropriate, sections will be divided into thirds or one-third to two-thirds ratios.

	- Sizing of elements will be balanced and proportional to again improve the visual comfort of the site. Where appropriate, measurements will use rem units to help with responsiveness.

	- Layouts will be responsive to different screen sizes, particularly as many users will be expected to view the site on mobile devices. Consequently, the layout will change according to media size e.g. three horizontal columns on a desktop may become three vertical columns on a mobile phone.

  

-  #### Colour Scheme

	- The colour scheme for this site is important to help the user feel immediately comfortable. Green tones reflecting the grass of the football pitch should feature prominently. Fans of the Premier League will also be familiar with the colour scheme used by the organisation, which features purple tones prominently on media content.
	- The [Coolors](https://coolors.co/ffca3a-8ac926-1982c4-6a4c93-343330-fffbfe) website was used to assist in choosing a colour scheme. The 'Stadiums' section of the website will have a background image of a football pitch so this was used to generate a colour palette which complements the greens of this image. It also includes a purple shade to reflect the Premier League.
![Around The Grounds Colour Scheme](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/around-the-grounds-colour-palette.png)
	- The standard #000 Black and #FFF white will also be used where appropriate.
	- The headers and footers will have a lighter colour to contrast with the page content. 
	- Colours will be checked with [WebAIM](https://webaim.org/resources/contrastchecker/) to ensure that the colour contrasts meet accessibility guidelines.

	 - **Additional colours**
	- [#7aac2b](https://icolorpalette.com/color/7aac2b) - the green shade in the palette looked too light for the navigation bar. The Google Dev Tools colour picker was used to find a more suitable, darker shade of green. This was checked with WebAIM. 

    It was decided that the background colour of each card should be synonymous with the stadium/football club. The following shades were chosen after checking background and foreground colours with WebAIM.

	  - [#ff6161](https://icolorpalette.com/color/ff6161) - light red shade.
	  - [#7f1734](https://icolorpalette.com/color/7f1734) - claret
	  - [104e75](https://icolorpalette.com/color/104e75) - blue shade


-  #### Typography

	- The font choices for the site will again consider the user and remain consistent with their experiences and expectations. Consideration has been given  to football related media in choosing a font scheme. The Premier League created its own font for use on their [website](https://www.premierleague.com/home). This font is called 'PremierSans' and is not freely available so a similar font was sought.

	-  The [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto&preview.text=Premier%20league&preview.text_type=custom#standard-styles) font on [Google Fonts](https://fonts.google.com/) has a similar look and feel to 'PremierSans'. It is a popular font as it flows well, is easy to read and makes the user feel comfortable. It is for these reasons that this will be the primary font for the site. Sans serif will act as a fall-back font in case the chosen fonts are not imported correctly.

  

-  #### Imagery

	- Football can be an emotive subject and imagery plays an important part in tapping into that emotion when it comes to engaging with users. Users will expect football related images. In particular, given the subject matter of the site, they will expect to be able to see football grounds and pitches.

	- Each section will have a hero image to catch the user's attention and draw them into the page. This is consistent, predictable and learnable, thus helping to achieve a positive emotional response in the user.

	- All images compressed to assist page loading times, using [TinyPNG](https://tinypng.com/).

-  #### Wireframes

  

	-  [Small Screen](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/wireframes/around-the-grounds-small-screen-wireframe.pdf) Wireframe

  

	-  [Medium Screen](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/wireframes/around-the-grounds-medium-screen-wireframe.pdf) Wireframe

  

	-  [Large Screen](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/wireframes/around-the-grounds-large-screen-wireframe.pdf) Wireframe

[Return to Table of contents](#table-of-contents)

## Features
---
### Existing Features
- The site currently consists of a single page, with an additional 404 error page. The page is divided into three sections, each section representing the areas of greatest interest to the user. These are the Home Page, which introduces the site content and makes the first impression on the user; the Stadiums section, which hosts the core interactive area of the site; the Contact section, which allows the user to interact further with the site to pursue further information.
- The page has a navigation bar at the top and a footer at the bottom. These areas are styled with the same colour scheme and hover functionality display to maintain consistency.
- The navigation bar also has the company logo as a clickable 'Home' button. This reinforces the site's image and makes it more recognisable to the user. Similarly, a favicon has been added to the open page tab. This is expected and helps the user to identify the site amongst several open sites. This brand reinforcement is important for building familiarity and trust.
- The navigation bar is positioned in an expected position at the head of the page. The navigation links stand out and make their purpose clear. The active page link is bolder to emphasise to the user where they are on the page. A bar was initially added beneath the active link to reinforce this but it seemed to interfere with the aesthetics of the links when another link was hovered over. As the navigation bar is not fixed and it is currently only one page, this is not so important so was removed - as the site develops, this could be amended.  As the user hovers over the other links, the text bounces up against a black background. This makes it clear that clicking on these links will take them to a location related to the unambiguous wording used.
- The main focus of the Home page is the striking hero image. The imposing image of the most modern and impressive stadium in London immediately gives users a very good idea what the site is about. Reinforcing this is the cover over the image. Again, the football icon sends a clear statement of the subject matter of the site, further supported by the site name as a the main heading. Now that the user is intrigued, the introductory text on the hero overlay informs the user of the site's focus and offers further links to the other sections, encouraging the user to explore the site.
- A smooth scroll function is employed to ease the user navigation through the site and allows them to get an understanding of the layout and where they are in relation to the rest of the site. 
- The principal focus of the site is deliberately placed in the first section that the user will visit after the home page. It is designed to be impactful and reassure the user of the site's value. A relevant and lively background image of a football pitch is visually appealing and reinforces the site material. This section harnesses the power of interactivity and invites the user to take control.  
- The Google Maps application allows the user to see exactly how many stadiums there are on the site and where they are located. The interactive power comes to the fore here as clicking a stadium marker focuses the map on that marker, brings up an information window with the stadium and team name displayed and most impressively determines the content of the two cards so that only the information relevant to the user is displayed. The first card reveals the crest/logo of the stadium/football club and the second provides an image with introductory information on the stadium.
- The layout of the map and cards is responsive, determined by the screen size of the device used to view them. On smaller devices, each item takes up the whole screen, following one beneath the other. As the screen size increases, the items move fluidly with the map above the two cards on medium devices and ending with three in a row on larger screen sizes.
- The user is encouraged to explore further still with the 'Click for stadium details' instruction at the foot of the second card. Clicking the card flips it around to reveal information about the user's chosen stadium. This includes a link to the stadium/football club's website, which opens in a separate tab and offers the user the ability to access more information without having to search themselves but also keeps them on the site.
- Closing the focused information window on the map zooms out and refocuses the map to its original position, providing a smoother user experience. Clicking a new marker zooms into that marker and changes the cards, ensuring that the front of the flip card is on display.

- The Contact section again provides a relevant and impressive background image. The user is facing the 'goal', the goal being obtaining more information. Each input field clearly sets out what is required. If any input fields are left out or filled incorrectly, the submission will not be allowed and a window will inform the user of what is missing. A dropdown menu encourages the user to seek tour information, which is useful to the user, the site owner and any potential business partners.
- The submit button is designed to mimic a football to appeal to the user. When hovered over, the button grows and changes colour to add further focus and indicate its purpose. On submission, the button reacts by informing the user that it is 'Sending...' A successful submission invokes a modal to display, reassuring the user that they have been successful. A failed submission invokes a separate modal, informing the user of the failure and offering them advice and a way to try again. This reassurance is important and improves the user experience, helping them to continue to use the site. 
- The form is linked via EmailJS to send the user response to an email address. The fields are set up so that the name, address, stadium choice and message are sent to the site owner. A copy is also sent to the user for further reassurance that their submission was successful.
- The site footer provides social media icon links as an invitation to the user to explore further once they have absorbed the information presented to them. The icons are familiar to the user and an appearance change when hovered over invites them to click.
- As the user scrolls down the page, in the absence of a fixed navigation bar, a floating return to top arrow appears. This makes for a better experience than having to scroll back to the top of the page, which could encourage the user to leave the site.  
- A styled 404 error page offers yet more reassurance to the user in the event of a site malfunction. Instead of a generic error response, this will display a familiar page with the same header and navigation links as the main site. An appealing background image and guidance on how to return to the site comfort the user and encourage them to go back to the site.
### Future Features
- This project has the potential to grow with many additional features. The further use of APIs to show information local to each location, calculate distances on Google Maps and to attain JSON information from elsewhere are all possible.
- The site could be expanded to include individual pages for each stadium with greater details. It could also be expanded to stadiums beyond London.
- Further interactive features such as a live booking system could be incorporated.

## Technologies Used
---
### Languages Used

-  [HTML5](https://en.wikipedia.org/wiki/HTML5) for structuring the site

-  [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) for styling the site

-  [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for site logic

	- Although no specific naming methodology will be employed (such as BEM), class and function names will be descriptive of their purpose so that they can be easily identifiable to other developers.

	- Comments will be placed appropriately within the HTML, CSS and JS code to improve readability.

  

### Frameworks, Libraries & Programs Used

  

1.  [Bootstrap 4.6:](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

	- Bootstrap was used to assist with the responsiveness and styling of the website.

1.  [Hover.css:](https://ianlunn.github.io/Hover/)

	- Hover.css was used on the Social Media icons to add the float transition while being hovered over.

1.  [Google Fonts:](https://fonts.google.com/)

	- Google Fonts was used to import the 'Roboto' font into the style.css file, which is used throughout the project.

1.  [Font Awesome:](https://fontawesome.com/)

	- Font Awesome was used to add icons for aesthetic and UX purposes.

1.  [jQuery:](https://jquery.com/)

	- jQuery was used to assist with manipulation of the Document Object Model to make the site interactive for users.

1.  [Git](https://git-scm.com/)

	- Git was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.

1.  [GitHub:](https://github.com/)

	- GitHub is used to store the project code after being pushed from Git.

1.  [Balsamiq:](https://balsamiq.com/)

	- Balsamiq was used to create the [wireframes](https://github.com/SteveKennyUK/around-the-grounds/tree/main/assets/wireframes) during the design process.

1.  [Looka:](https://looka.com/)

	- Looka was used to create the website logo.

1.  [GIMP:](https://www.gimp.org/)

	- GIMP was used to resize images and edit photos for the website.

1.  [favicon.io:](https://favicon.io/favicon-converter/)

	- favicon.io was used to convert the football image to a favicon to enable full web browser compatibility.

1.  [WebAIM](https://webaim.org/resources/contrastchecker/)

	- WebAIM was used to check that foreground and background colour contrasts meet WCAG accessibility requirements.

1.  [Webformatter](https://webformatter.com)

	- Webformatter was used to assist in optimising code readability.

1.  [Autoprefixer](https://autoprefixer.github.io/)

	- Autoprefixer was used to parse CSS and add vendor prefixes.

1.  [TinyPNG](https://tinypng.com/)

	- Tiny PNG was used for image compression.

1.  [W3Schools](https://www.w3schools.com/)

	- W3Schools was used for coding guidance and clarification.

1. [Google Maps JavaScriptAPI](https://developers.google.com/maps/documentation/javascript/overview) was used to create  the map element and its interactive components.

1. [Github Projects Board](https://github.com/SteveKennyUK/around-the-grounds/projects/1) used to plan and follow project progress.

1. [EmailJS](https://www.emailjs.com/) used to create email service.
## Testing
---
Testing details can be found [here](https://github.com/SteveKennyUK/around-the-grounds/blob/main/TESTING.MD).

## Deployment

---

### GitHub Pages
This project has been deployed to GitHub Pages. The deployment process is as follows -
1. Log in to GitHub and locate the [relevant repository](https://github.com/SteveKennyUK/around-the-grounds). If you do not have a GitHub account, you may create one [here](https://github.com/join).

2. At the top of the repository, select 'Settings'. See below -

![ ](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/deployment/image-1.JPG)

3. On the 'Settings' page, scroll down the menu on the left-hand side and select 'Pages', near the bottom of the menu. See below -

![ ](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/deployment/image-2.JPG)
 
This will open GitHub pages.

4. Under 'Source', click the dropdown titled 'None' and select the 'main' branch. Click on 'Save'. See below -

![ ](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/deployment/image-3.JPG)

5. The page will automatically refresh and inform you that the site is ready to be published and provide the https:// address. See below -

![ ](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/deployment/image-4.JPG)

6. A [link](https://stevekennyuk.github.io/around-the-grounds/) to the now published site can be found in the GitHub 'Pages' section of 'Settings'.

### Forking the GitHub Repository

It is possible to fork this GitHub repository and make a copy of the original repository to view and/or make changes without affecting the original. This is achieved by following these steps -  

1. Log in to your GitHub account and locate the [relevant repository](https://github.com/SteveKennyUK/around-the-grounds).

2. Click on 'Fork', located at the top right-hand side of the repository page.

![ ](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/deployment/image-5.JPG)

3. You will now have a copy of the repository in your own GitHub account.

### Making a Local Clone

It is possible to copy the repository to your local machine so that you can fix merge conflicts, add or remove files and push larger commits without affecting the original repository.  

Cloning a repository pulls down a full copy of all the repository data that GitHub has at that point in time. See [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for further information and below for a summary -

1. Log in to your GitHub account and locate the [relevant repository](https://github.com/SteveKennyUK/around-the-grounds).

2. Click on the 'Code' button, next to the green 'Gitpod' button. This will reveal the 'Clone' option.

3. In order to clone the repository using HTTPS, select HTTPS and copy the link. There is a copy button to the right of the URL.

![ ](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/deployment/image-6.JPG)

4. Next, open Git Bash. See [here](https://git-scm.com/downloads) for download options, if required.

5. Change the current working directory on your local machine to the location where you want the cloned directory to be made.

6. Type `git clone` into your IDE terminal followed by the URL you copied in Step 3.
```
$ git clone https://github.com/SteveKennyUK/around-the-grounds.git
```
7. Press Enter.

8. Your local clone will be created.
```
$ git clone https://github.com/SteveKennyUK/around-the-grounds.gitCloning into 'around-the-grounds'...
remote: Enumerating objects: 89, done.
remote: Counting objects: 100% (89/89), done.
remote: Compressing objects: 100% (70/70), done.
remote: Total 89 (delta 30), reused 63 (delta 15), pack-reused 0
Receiving objects: 100% (89/89), 1.53 MiB | 7.39 MiB/s, done.
Resolving deltas: 100% (30/30), done.
```
See [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories) for more information on the above processes.

## Credits

### Code
- [Code Institute](https://stackoverflow.com) tutorials provided helpful guidance in creating the code for this project.
- [Google Maps documentation](https://developers.google.com/maps/documentation/javascript/examples) provided guidance on Google Maps set up, markers and interactivity.  
- [Eamonn Smyth](https://code-institute-room.slack.com/archives/C7HD37Q1F/p1604655940148200?thread_ts=1604655940.148200&cid=C7HD37Q1F) provided guidance with using Google Maps API.
- [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/): Bootstrap Library was used throughout the project, mainly to make the site responsive using the Bootstrap Grid System.
- Code for the floating scroll to top button was provided by [W3Schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top) and slightly modified by the developer to suit the site. 
- Many helpful hints and guidance were provided by posts by other developers on [Stack Overflow](https://stackoverflow.com/) - credits in the code where code snippets were used.

### Content

- Content written by the developer with assistance from the following resources -
	- [The Stadium Guide](https://www.stadiumguide.com/)
	- [Football Ground Guide](https://footballgroundguide.com/)
	- [Arsenal F.C.](https://www.arsenal.com/)
	- [Brentford F.C.](https://www.brentfordfc.com/)
	- [Chelsea F.C.](https://www.chelseafc.com/en)
	- [Crystal Palace F.C.](https://www.cpfc.co.uk/)
	- [Tottenham Hotpsur F.C.](https://www.tottenhamhotspur.com/)
	- [Watford F.C.](https://www.watfordfc.com/)
	- [West Ham United F.C.](https://www.whufc.com/)
	- [Wembley Stadium](https://www.wembleystadium.com/)


### Media
Images were either created by the developer or sourced from third parties. Please see below for third party sources,
- General
	- [Favicon image](https://github.com/SteveKennyUK/around-the-grounds/tree/main/assets/images/favicon)/[Home Page hero image football](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/football.png) by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=157930">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=157930">Pixabay</a>

- Home Section

	-  [Hero image](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/hero-image-home.jpg) courtesy of [Eminetra](https://eminetra.co.uk/anthony-joshuas-battle-with-usyk-confirmed-at-tottenham-hotspur-stadium-on-september-25/556211/#).

- Stadiums
	-  [Hero image](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/football-pitch.jpg) courtesy of [Clipart Library](http://clipart-library.com/clipart/pi5rLM7rT.htm#google_vignette).
	- [Wembley Stadium](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/wembley-stadium.jpg) image courtesy of [besthqwallpapers.com](https://besthqwallpapers.com/sport/wembley-stadium-new-wembley-football-stadium-evening-sunset-119280).
	- [Brentford Community Stadium](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/brentford-stadium.jpg), [London Stadium](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/london-stadium.jpg), [Selhurst Park](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/selhurst-park.jpg) and [Vicarage Road](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/vicarage-road.jpg) images courtesy of [Clubs From Above](https://www.clubsfromabove.com/).
	- [Stamford Bridge](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/chelsea-stadium.jpg) image courtesy of [Chelsea F.C.](https://www.chelseafc.com/en/news/2020/11/26/return-of-supporters-to-stamford-bridge)
	- [Emirates Stadium](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/emirates-stadium.jpg) image courtesy of [Financial Times](https://www.ft.com/content/97ca37cc-94de-11e3-af71-00144feab7de).
	- [Tottenham Hotspur Stadium](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/th-stadium.jpg) image courtesy of [onefootball.com](https://onefootball.com/es/noticias/totful-previa-europa-y-salvacion-en-juego-en-el-tottenham-stadium-32149410).
	- [Wembley Stadium Logo](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/wembley-logo.png) courtesy of [logok.org](http://logok.org/).
	- [Club crest images](https://github.com/SteveKennyUK/around-the-grounds/tree/main/assets/images/stadiums) courtesy of [Sports Joe](https://www.sportsjoe.ie/) except [Brentford crest image](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/stadiums/brentford-crest.jpg) courtesy of [Brentford F.C.](https://www.brentfordfc.com/).

	- [Flip Card Icon](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/flip-icon.jpg) courtesy of [Free Icons Library](https://icon-library.com/).

- Contact Section
	- [Background Image](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/hero-image-contact.jpg) courtesy of [Wallpaper Safari](https://wallpapersafari.com/w/3AUjzp).

- 404 Error Page
	- [Background image](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/images/404-error.jpg) courtesy of [?? Ylivdesign | <a href="https://www.stockfreeimages.com/">Stock Free Images</a>](https://www.stockfreeimages.com/23530406/404-error.html#).

### Acknowledgements
- My Mentor Antonio Rodriguez for his advice, feedback and encouragement.  

- Fellow Code Institute students, tutors and mentors on [Slack](https://slack.com/intl/en-gb/) were invaluable for their guidance when I ran into issues.

### Notice

- This site has been created for educational purposes only.