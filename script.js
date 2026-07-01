const recommendationSection = document.getElementById("recommendation-section");
const recommendationTitle = document.getElementById("recommendation-title");
const songList = document.getElementById("song-list");

const moodSongs = {
    happy: {
        title: "Happy Vibes Playlist",
        songs: [
            "Happy - Pharrell Williams",
            "Can't Stop the Feeling! - Justin Timberlake",
            "Good Vibrations - The Beach Boys",]
    },
    sad: {
        title: "Sad Vibes Playlist",
        songs: [
            "Someone Like You - Adele",
            "Stay With Me - Sam Smith",
            "Fix You - Coldplay",]
    },
    energetic: {
        title: "Energetic Vibes Playlist",
        songs: [
            "Eye of the Tiger - Survivor",
            "Don't Stop Me Now - Queen",
            "Uptown Funk - Mark Ronson ft. Bruno Mars",]
    },
    focused: {
        title: "Focused Vibes Playlist",
        songs: [
            "Weightless - Marconi Union",
            "Clair de Lune - Claude Debussy",
            "Time - Hans Zimmer",]
    },
    calm: {
        title: "Calm Vibes Playlist",
        songs: [
            "River Flows in You - Yiruma",
            "Spiegel im Spiegel - Arvo Pärt",
            "Gymnopédie No.1 - Erik Satie",] 
    },
    sensual: {
        title: "Sensual Vibes Playlist",
        songs: [
            "Earned It - The Weeknd",
            "Wicked Game - Chris Isaak",
            "Let's Get It On - Marvin Gaye",]
    },
};

docoument.querySelectorAll(".mood-options div").forEach(card => {
    card.addEventListener("click", () => {
        const mood = card.getAttribute("data-mood");
        const selectedMood = moodSongs[mood];

        recommendationTitle.textContent = selectedMood.title;
        songList.innerHTML = "";

        selectedMood.songs.forEach(song => {
            const li = document.createElement("li");
            li.textContent = song;
            songList.appendChild(li);
        });

        recommendationSection.style.display = "block";
    });
});