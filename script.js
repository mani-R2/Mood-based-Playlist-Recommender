"use strict";
const recommendationsSection = document.getElementById("recommendations");
const recommendationTitle = document.getElementById("recommendation-title");
const songList = document.getElementById("song-list");
const savedMoodMessage = document.getElementById("savedMoodMessage");

let moodSongs = {};

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

function setupMoodCards() {
    document.querySelectorAll(".mood-card").forEach(card => {
        card.addEventListener("click", () => {
            const mood = card.getAttribute("data-mood");
            const selectedMood = moodSongs[mood];

            if (!selectedMood) {
                return;
            }

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
        });
    });
}

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

window.addEventListener("click", (event) => {
    if(event.target === aboutModal){
        aboutModal.classList.remove("show");
    }
});

$(function() {
    $("#recommendationAccordion").accordion({
        collapsible: true,
        heightStyle: "content",
    });
});

