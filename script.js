"use strict";

/* DOM Elements */
const recommendationsSection = document.getElementById("recommendations");
const recommendationTitle = document.getElementById("recommendation-title");
const songList = document.getElementById("song-list");
const savedMoodMessage = document.getElementById("savedMoodMessage");

let moodSongs = {};

/* AJAX / JSON Playlist Data */
// Load the playlist data before setting up the mood card events so users cannot select a mood before the recommendation data is ready. 
fetch("songs.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to load song recommendations.");
        }

        return response.json();
    })
    .then(data => {
        moodSongs = data;
        setupMoodCards();
        displaySavedMood();
    })
    .catch(error => {
        console.error("Error loading song recommendations:", error);
    });

/* Mood Selection */
function setupMoodCards() {
    document.querySelectorAll(".mood-card").forEach(card => {
        card.addEventListener("click", () => {
            const mood = card.getAttribute("data-mood");
            const selectedMood = moodSongs[mood];

            if (!selectedMood) {
                return;
            }

            // Save the selected mood to localStorage so it can be displayed after the page is refreshed.
            localStorage.setItem("lastMood", mood);
            displaySavedMood();

            recommendationTitle.textContent = selectedMood.title;
            songList.innerHTML = "";

            selectedMood.songs.forEach(song => {
                const songCard = document.createElement("div");
                songCard.classList.add("song-card");

                songCard.innerHTML = `
                    <p class="song-title">🎵 ${song.name}</p>
                    <a href="${song.link}" target="_blank" rel="noopener noreferrer" class="listen-btn">
                        Listen
                    </a>
                `;

                songList.appendChild(songCard);
            });

            recommendationsSection.classList.remove("hidden");

            // Move the recommendations section into view after the mood is selected, so they don't manually have to scroll down to see the page content.
            recommendationsSection.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

/* Web Storage */
// Check's whether the mood exists before trying ot display it.
function displaySavedMood() {
    const savedMood = localStorage.getItem("lastMood");

    if (savedMood) {
        const formattedMood = savedMood.charAt(0).toUpperCase() + savedMood.slice(1);

        savedMoodMessage.textContent = `Your last selected mood was ${formattedMood}.`;
    }
}

/* Dark Mode Toggle */
const darkModeToggle = document.getElementById("themeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    darkModeToggle.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";
});

/* About Modal */
const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");

aboutBtn.addEventListener("click", () => {
    aboutModal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    aboutModal.classList.remove("show");
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === aboutModal){
        aboutModal.classList.remove("show");
    }
});

/* Accordion */
// Use the jQuery UI accordion to keep the recommendation information organized while allowing users to expand only the section they want to read.
$(function() {
    $("#recommendationAccordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
});

/* Featured playlists carousel plugin */
// Initialize Slick with manual controls so users choose when the featured playlist changes instead of having the carousel autoplay.
$(function () {
    $(".playlist-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: false
    });
});