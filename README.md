# Around The Grounds
  
 
This website has been created for my Interactive Frontend Development Milestone 2 project, the second project on the [Code Institute Diploma in Software Development](https://codeinstitute.net/) course.

This project introduces interactivity through the use of JavaScript. The aim is to demonstrate the ability to create a Frontend site which allows users to actively engage with data and alter the way information is displayed in order to achieve their preferred goals.  

'Around The Grounds' provides the locations of the English Premier League football grounds in the London area, displayed using Google Maps. The primary aim is to allow users to locate their desired ground(s), display information about their selected ground(s) and request further information, including tour details, using a Contact form.

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

-  #### Typography

	- The font choices for the site will again consider the user and remain consistent with their experiences and expectations. Consideration has been given  to football related media in choosing a font scheme. The Premier League created its own font for use on their [website](https://www.premierleague.com/home). This font is called 'PremierSans' and is not freely available so a similar font was sought.

	-  The [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto&preview.text=Premier%20league&preview.text_type=custom#standard-styles) font on [Google Fonts](https://fonts.google.com/) has a similar look and feel to 'PremierSans'. It is a popular font as it flows well, is easy to read and makes the user feel comfortable. It is for these reasons that this will be the primary font for the site. Sans serif will act as a fall-back font in case the chosen fonts are not imported correctly.

  

-  #### Imagery

	- Football can be an emotive subject and imagery plays an important part in tapping into that emotion when it comes to engaging with users. Users will expect football related images. In particular, given the subject matter of the site, they will expect to be able to see football grounds and pitches.

	- Each section will have a hero image to catch the user's attention and draw them into the page. This is consistent, predictable and learnable, thus helping to achieve a positive emotional response in the user.

-  #### Wireframes

  

	-  [Small Screen](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/wireframes/around-the-grounds-small-screen-wireframe.pdf) Wireframe

  

	-  [Medium Screen](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/wireframes/around-the-grounds-medium-screen-wireframe.pdf) Wireframe

  

	-  [Large Screen](https://github.com/SteveKennyUK/around-the-grounds/blob/main/assets/wireframes/around-the-grounds-large-screen-wireframe.pdf) Wireframe

