# Mood-Based-Playlist-Recommender
This is my senior project web app created for users who want to discover and listen to music based on how they are feeling. Users can choose from different moods and receive curated song recommendations that match the overall vibe and atmosphere of that mood.

This project originally began as a project for my GIT480 course and is being expanded for my final project. The original version included the main HTML and CSS design, mood selection functionality, song recommendations, dark and light mode, and an About Recommendations modal.

For this final project, I reviewed and improved the existing code while adding new functionality to meet the project requirements, including jQuery, AJAX/JSON, web storage, and a slideshow/carousel.

# AI Disclosure
I used generative AI as part of this project. I have listed the tool, the parts of the project that were affected, how I used it, and how I tested and revised the work myself.

## 1. What generative AI tool or tools did you use?
I used ChatGPT during parts of the development process.

## 2. What did I use AI for?
I mainly used ChatGPT as a resource when I had questions about the assignment requirements or ran into problems with my code. I used it for explanations, debugging suggestions, and reviewing code I had already written.

## 3. Which specific parts of the project were affected?
I used AI assistance while troubleshooting the JSON/fetch, functionality and the carousel plugin. I also used it to review my JavaScript, CSS, and HTML for issues to make sure I was meeting the assignment requirements.

## 4. How much of the final HTML, CSS, or JavaScript was influenced by AI?
The majority of the project was based on my original Mood-Based Playlist Recommender that I created for my GIT480 Senior Project. The overall design, content, mood selection, song recommendations, dark/light mode, modal, and responsive layout were already part of my project.

For this assignment, I used AI as a reference while adding and troubleshooting some of the new required features. I made changes within my existing files and tested them as I worked.

## 5. How did you test and verify code?
I tested the website throughout the development process using Live Server and Chrome Developer Tools. I tested each mood and its song recommendations, spotify links, dark/light mode, modal, localStorage, accordion, and carousel.

I also tested the website at different screen sizes, checked the console for errors, and validated my HTML and CSS.

## 6. What did you change, revise, or write yourself after receiving AI help?
I made the changes within my existing project and adjusted them to work with my design and existing code. I chose the content, playlists, images(created through Adobe Illustrator), and styling and tested the new features as they were added.

When I ran into problems, I went back through the code, made corrections, and tested it again until the features worked correctly.

# Development Log

## Initial Project Audit
I started this final project using my previous GIT480 Mood-Based Playlist Recommender project as the base. Before adding any new features, I reviewed the existing HTML, CSS, and JavaScript to determine what needed to be corrected or improved for the new requirements.
Initial work included:
* Reviewing the existing project files and organization.
* Checking the semantic structure of the HTML.
* Reviewing the CSS for incorrect, duplicate, or unnecessary styles.
* Testing the existing JavaScript functionality.
* Checking interactive elements for accessibility improvements.
* Identifying existing code that could be reused for the final project.
* Making a list of the new features required for the final project.
* Planning the addition of AJAX/JSON, web storage, a jQuery widget, and a slideshow/carousel.
  
The original project already included the main page layout, navigation, mood selection cards, dynamically displayed song recommendations, a dark/light mode toggle, an About Recommendations modal, and responsive styling.

During the initial review, I identified several areas that needed to be updated before adding the new functionality. These included correcting inconsistencies between the HTML and CSS, improving the semantic structure of interactive elements, reviewing accessibility, and updating the JavaScript to meet the final project requirements.

## AJAX and JSON Playlist Data
Moved the playlist recommendation data out of the JavaScript file and into a separate `songs.json` file. I used `fetch()` to load the JSON data when the page loads.

The mood selection functionality was updated so that the click events are initialized after the JSON data has successfully loaded. This prevents users from selecting a mood before the recommendation data is available.

The existing recommendation display was kept so that users can still select a mood and view the corresponding playlist and Spotify links.

### Recommendation Navigation Improvement
Added smooth scrolling to the song recommendations section after a user selects a mood. This makes it easier for users to see the dynamically loaded recommendations without having to manually scroll down the page.

## Web Storage
Added web storage using `localStorage` to remember the user's most recently selected mood. When a user selects one of the mood cards, the mood is saved in their browser.

When the page is loaded again, the saved value is retrieved from localStorage and displayed above the mood selection cards. This allows the site to remember the user's previous selection between visits.

## jQuery Widget
Added a jQuery UI Accordion to provide additional information about how the music recommendations work.

The accordion allows users to expand and collapse sections explaining how songs are selected, why mood-based recommendations are used, and how the recommendations are curated. The jQuery and jQuery UI libraries were added to support the widget.

## Featured Playlist Carousel
Added the Slick jQuery carousel plugin to create a featured playlist slideshow.

The carousel includes three featured playlists: Energetic Rush, Sensual Seduction, and Peaceful Reset. Users can move between the playlists using the previous and next arrows or the navigation dots.

Autoplay is disabled so users have control over which playlist they view. The carousel uses the Slick plugin for its slideshow functionality.

## Final Testing and Cleanup
Completed the final testing of the website to make sure all of the features were working correctly.

I tested the website at different screen sizes, including 1280px, and checked for horizontal scrolling and responsive layout issues. 

I also tested the mood recommendations, About Recommendations modal, dark/light mode, accordion, web storage, and featured playlist carousel.

Lastly, I checked the Chrome Developer Tools for project-related console errors, validated the HTML and CSS, and cleaned up the CSS and JavaScript, and updated the README.

# Debugging Log

## Problem 1: Song Recommendations Were Not Loading

### What was not working
After moving the playlist information into the `songs.json`, the song recommendations stopped displaying when I clicked on a mood card.

### What I tried
I checked the browser console and reviewed the `fetch()` code and the event listeners for the mood cards. I also checked that `songs.json` was loading correctly.

### What fixed it
I changed the JavaScript so the mood card click events are set up after the JSON data successfully loads. This made sure the recommendation data was available before a user could select a mood.

### What I learned
I learned that when data is loaded asynchronously with `fetch()`, the rest of the code can run before that data is available. Code that depends on the fetched data needs to run after the data has loaded.

### Did I use AI for this problem
Yes. I used ChatGPT to help review the problem and troubleshoot why the recommendations stopped displaying. I made the changes in my project and tested each mood afterward.

## Problem 2: Featured Playlist Carousel Displayed Incorrectly

### What was not working
When I first added the Slick carousel plugin, all three featured playlists displayed vertically instead of appearing as a slideshow.

### What I tried
I checked the Slick CSS and JavaScript links, the plugin initialization, and the HTML structure of the carousel.

### What fixed it
I removed the old `.carousel-track` wrapper so each `.carousel-slide` became a direct child of the Slick carousel. I also removed the old custom carousel layout CSS.

### What I learned
I learned that plugins can require a specific HTML structure. Even when the plugin files and JavaScript are loaded correctly, the markup still needs to match what the plugin expects.

### Did I use AI for this problem
Yes. I used ChatGPT to help review my carousel structure and identify why Slick was not displaying the slides correctly. I made the corrections and tested the arrows and navigation dots afterward.

## Problem 3:

### What was not working
While testing the responsive design, I noticed horizontal scrolling at certain browser widths.

### What I tried
I tested the website at different viewport sizes and reviewed the CSS for elements that could extend beyond the width of the page.

### What fixed it
I adjusted the responsive styling and checked the layout again at different screen sizes, including 1280px, until the page fit correctly.

### What I learned
I learned that a website can look correct at one screen size but still have layout problems at another. Testing different viewport widths helped me find responsive issues that were not obvious at my normal browser size.

### Did I use AI for this problem
Yes. I used ChatGPT to help me work through how to test the viewport size and review possible causes of the horizontal scrolling. I made and tested the CSS changes in my project.