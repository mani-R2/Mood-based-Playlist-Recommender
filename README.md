# Mood-based-Playlist-Recommender
This is my senior project web app created for users who want to discover and listen to music based on how they are feeling. Users can choose from different moods and receive curated song recommendations that match the overall vibe and atmosphere of that mood.

This project originally began as a project for my GIT480 course and is being expanded for my final project. The original version included the main HTML and CSS design, mood selection functionality, song recommendations, dark and light mode, and an About Recommendations modal.

For this final project, I will be reviewing and improving the existing code while adding new functionality to meet the project requirements, including jQuery, AJAX/JSON, web storage, and a slideshow or carousel.
# Development Log
## AJAX and JSON Playlist Data
Moved the playlist recommendation data out of the JavaScript file and into a separate `songs.json` file. I used `fetch()` to load the JSON data when the page loads.

The mood selection functionality was updated so that the click events are initialized after the JSON data has successfully loaded. This prevents users from selecting a mood before the recommendation data is available.

The existing recommendation display was kept so that users can still select a mood and view the corresponding playlist and Spotify links.

## Web Storage
Added web storage using `localStorage` to remember the user's most recently selected mood. When a user selects one of the mood cards, the mood is saved in their browser.

When the page is loaded again, the saved value is retrieved from localStorage and displayed above the mood selection cards. This allows the site to remember the user's previous selection between visits.

## jQuery Widget
Added a jQuery UI Accordion to provide additional information about how the music recommendations work.

The accordion allows users to expand and collapse sections explaining how songs are selected, why mood-based recommendations are used, and how the recommendations are curated. The jQuery and jQuery UI libraries were added to support the widget.

# Initial Project Audit
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
