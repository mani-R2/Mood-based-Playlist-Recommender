const recommendationsSection = document.getElementById("recommendations");
const recommendationTitle = document.getElementById("recommendation-title");
const songList = document.getElementById("song-list");

const moodSongs = {
    happy: {
        title: "Happy Vibes Playlist",
        songs: [
            { name: "Can't Say - Travis Scott, Don Toliver", link: "https://open.spotify.com/track/27a1mYSG5tYg7dmEjWBcmL?si=a0a667fd402846a4" },
            { name: "You Make My Dreams - Hall & Oates", link: "https://open.spotify.com/track/4o6BgsqLIBViaGVbx5rbRk?si=0d2f9e504e4641b0" },
            { name: "Boom Boom Bass - RIIZE", link: "https://open.spotify.com/track/2J194R0KIKbK7bTHfUHPDB?si=82f34bae3ad44d8d" },
            { name: "Good Times - Jungle", link: "https://open.spotify.com/track/6I6QkE2UVSj9YX48oRrD6e?si=9e4f6867eae242f9" },
            { name: "I think it went like - Fiji Blue", link: "https://open.spotify.com/track/57PI93nJkYoyXIOXDOI5yK?si=d28dd023a54a4432" },
            { name: "Lovely Day - Bill Withers", link: "https://open.spotify.com/track/0ACACkoHUwgfgY5CxVIL4N?si=8d9c662159ff4b31" },
            { name:  "I'll see you there tomorrow - TXT", link: "https://open.spotify.com/track/0bMWoFtQIrnW5YyNMc4aKQ?si=7a955de4922545b7" },
            { name: "Happily Ever After - TXT", link: "https://open.spotify.com/track/29r5gr7b0f710smqMrm7pP?si=75d34520ac2b4e01" },
            { name: "Mikrokosmos - BTS", link: "https://open.spotify.com/track/0jSccBRnhNU4KtACMQPvco?si=3f3ebe4625a04884" },
            { name: "The View - Stray Kids", link: "https://open.spotify.com/track/5FM1V3qjHroqsXRBbL57rW?si=423847d526b347e3" },
        ]
    },

    sad: {
        title: "Sad Vibes Playlist",
        songs: [
            { name: "Hey Jude - The Beatles", link: "https://open.spotify.com/track/1eT2CjXwFXNx6oY5ydvzKU?si=3d0441314d744ab7" },
            { name: "Here comes the sun - The Beatles", link: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2?si=2e3236740c63460c" },
            { name: "Tonight I died to a frank ocean song - Hannah Bahng ", link: "https://open.spotify.com/track/3MPjAnpNeBB5kmOQRc4mJw?si=896ba2a241504c48" },
            { name: "Heartbreak Anniversary - Giveon", link: "https://open.spotify.com/track/2QfznFotJNZmnIEYFdzE5T?si=dd43cebfc6ef47cd"  },
            { name: "Someone Like You - Adele", link: "https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV?si=2d1b1606eb9f42fa" },
            { name: "Laugh it off - Post Malone", link: "https://open.spotify.com/track/26EjM7ZMAnWOKPAuKNOX24?si=864dffba54104d13"  },
            { name: "Marvin's Room - Drake", link: "https://open.spotify.com/track/047fCsbO4NdmwCBn8pcUXl?si=883eaf6511544711" },
            { name: "Ceilings - Lizzy McAlpine", link: "https://open.spotify.com/track/2L9N0zZnd37dwF0clgxMGI?si=29e19628abab4960"  },
            { name: "GLimpse of Us - Joji", link: "https://open.spotify.com/track/3aBGKDiAAvH2H7HLOyQ4US?si=8e882f1f44f44525" },
            { name: "What was I made for - Billie Eilish", link: "https://open.spotify.com/track/6wf7Yu7cxBSPrRlWeSeK0Q?si=2a7650b8ee034687"  },
        ]
    },

    energetic: {
        title: "Energetic Vibes Playlist",
        songs: [
            { name: "Rendezvous - Don Toliver feat. Yeat", link: "https://open.spotify.com/track/2Ejyg4CavumEr7lFUkk9aF?si=81b61010ef5c458e" },
            { name: "Body - Don Toliver", link: "https://open.spotify.com/track/0FlcmZ13DGRmscCroro9GO?si=1c1b2123303840ab" },
            { name: "FYR - BTS", link: "https://open.spotify.com/track/0KmrKOdScRDVYwWS8hkkdv?si=6bb53775846c49af" },
            { name: "Where She Goes - Bad Bunny", link: "https://open.spotify.com/track/2sTDlCxmuZCTDKKk9f1qus?si=a56730220f904450" },
            { name: "Picture in My Mind - PinkPantheress, Sam Gellaitry", link: "https://open.spotify.com/track/0z3YYobsavHguLTgqg5GC1?si=6ed67b08b07d4eca" },
            { name: "Excavator - Don Toliver", link: "https://open.spotify.com/track/2A5cwtDZpk7RvsPolrF4UL?si=a31211e4aa844923" },
            { name: "Too Many Nights - Metro Boomin(feat. Don Toliver & with Future) ", link: "https://open.spotify.com/track/2Hh3ETdQKrmSI3QS0hme7g?si=71fe4372e2744711" },
            { name: "E85 - Don Toliver", link: "https://open.spotify.com/track/3B4cjvGlPvyBLNG3AzEgkZ?si=bc722d3bdd554656" },
            { name: "Massive - Drake", link: "https://open.spotify.com/track/28JBD8p18xNuOfyV7Cotdn?si=d891b6602d584b84" },
            { name: "No Hands - Waka Flocka Flame(feat. Roscoe Dash & Wale) ", link: "https://open.spotify.com/track/03tqyYWC9Um2ZqU0ZN849H?si=03d85bbd59184764" },
        ]
    },

    focused: {
        title: "Focused Vibes Playlist",
        songs: [
            { name: "Midnight Sun - DYVN", link: "https://open.spotify.com/track/54KzyghAfd1zG6NJNKEiE9?si=e240d779e01a4e80" },
            { name: "CapriSun - 90's Child", link: "https://open.spotify.com/track/0In2CHQnnwdgCEVcIixuY8?si=ab561b146246499d" },
            { name: "Earl Grey - Bonbon", link: "https://open.spotify.com/track/4ZByTOudNjRv1cJByzjBj1?si=1659c60d5d7247c9" },
            { name: "Boundaries - The Breed", link: "https://open.spotify.com/track/1ptShrFO9hUGDtNgEy5TNi?si=a9538d9b4f004f3b" },
            { name: "Warm Times - Xander", link: "https://open.spotify.com/track/5QX3B8i616v9JGCVUaMd5H?si=6b37475960404614" },
            { name: "Trees - Henrik", link: "https://open.spotify.com/track/5HKqqkfAVq9lMvjznvWZGx?si=40edf5ce5b9f4b42" },
            { name: "Husk - Slenderbodies,Josh Jacobson", link: "https://open.spotify.com/track/3rFyaBEBu4Rg3avPrC7656?si=495eed333d9f417c" },
            { name: "My Own Space - Øraeth", link: "https://open.spotify.com/track/00uwQQFI9Hc37WOlnrPpsp?si=d96f329ddaa64356" },
            { name: "Kyoto - Jellis", link: "https://open.spotify.com/track/6mtxddZ39IpdjB58qQ0htp?si=5cd749c120634d51" },
            { name: "Persephone's Perception -  SHOLTO", link: "https://open.spotify.com/track/5QTxpQE12MZ2Nd1xxxbEI6?si=470de943d9a14999" },
        ]
    },

    calm: {
        title: "Calm Vibes Playlist",
        songs: [
            { name: "TMU - Don Toliver", link: "https://open.spotify.com/track/588gFLoYJdlQ9zLSuR3IpJ?si=9e5c019d9504423c" },
            { name: "Tiramisu - Don Toliver", link: "https://open.spotify.com/track/2GHKo6nrSjruvBEQbzD7Fw?si=8896795fe4b74178" },
            { name: "Please - BTS", link: "https://open.spotify.com/track/1I1QqHDHgnEDfeQ20QFWvj?si=d53d43739b9945b3" },
            { name: "I Wonder - Kanye West", link: "https://open.spotify.com/track/7rbECVPkY5UODxoOUVKZnA?si=62deeba0375e4d44" },
            { name: "Link up - Metro Boomin(Don Toliver, Wizkid feat. BEAM & Toian)", link: "https://open.spotify.com/track/0y8Pu7x5jXgUjOIJvQIF5L?si=6213fc919c1b4cda" },
            { name: "Nobody(make me feel) - oskar med k,Khalid", link: "https://open.spotify.com/track/3ZCm5j5HXU8MrFOohzziEv?si=14a57e82b1424cf9" },
            { name: "Jackie Brown - Brent Faiyaz", link: "https://open.spotify.com/track/2IlT65thKQQw248mhk2PjQ?si=56ac0b974509421e" },
            { name: "Reminder - The Weeknd", link: "https://open.spotify.com/track/37F0uwRSrdzkBiuj0D5UHI?si=e46ed1060ce54b3f" },
            { name: "Truth or Dare - Tyla", link: "https://open.spotify.com/track/1whAXVGN8AdfrnoXNIXfJf?si=d4dcac1d204c4b9b" },
            { name: "Used - SZA(feat. Don Toliver)", link: "https://open.spotify.com/track/1TweDM3JC49LNeelLVg3yX?si=706ed562d3804f3c" },
        ]
    },

    sensual: {
        title: "Sensual Vibes Playlist",
        songs: [
            { name: "Earned It - The Weeknd", link: "https://open.spotify.com/track/4frLb7nWtsz2ymBE6k2GRP?si=ec140e1b0bf44c84" },
            { name: "Call out my name - The Weeknd", link: "https://open.spotify.com/track/09mEdoA6zrmBPgTEN5qXmN?si=58555522dcaf44e7" },
            { name: "Streets - Doja Cat", link: "https://open.spotify.com/track/60ynsPSSKe6O3sfwRnIBRf?si=5e19fccd706542ad" },
            { name: "Lose My Mind - PARTYNEXTDOOR", link: "https://open.spotify.com/track/4mCdid0oWqylN7m1QgqbHu?si=e2dd9d9c18e24d12" },
            { name: "Kame House - Tory Lanez", link: "https://open.spotify.com/track/4YgrbHO3H8HPjCjQ5wDFGS?si=6a9514fb2da14d5d" },
            { name: "Get you - Daniel Caesar (feat. Kali Uchis)", link: "https://open.spotify.com/track/2uP6t2J5MEwhr9rDkAAzwh?si=b782d8b662d64a44" },
            { name: "Take you Down - Chris Brown", link: "https://open.spotify.com/track/1vwUsp52io0AGQ5yv470IC?si=a2b84767350a4a29" },
            { name: "Body Party - Ciara", link: "https://open.spotify.com/track/0rFZaQ4crlGAzuCjWCQ2xu?si=d0e37a9ad2664814" },
            { name: "Control - PARTYNEXTDOOR ", link: "https://open.spotify.com/track/2LHtu3z8Xa9AToxLRlLm1g?si=fccfcbf708c24872" },
            { name: "The Hills - The Weeknd", link: "https://open.spotify.com/track/7fBv7CLKzipRk6EC6TWHOB?si=89b00bfda4cf429a" },
            { name: "Body - Syd", link: "https://open.spotify.com/track/0IaiJbZebXLqfetAkMEZzU?si=4d57b7f2482c4cd7" },
        ]
    },
};

document.querySelectorAll(".mood-card").forEach(card => {
    card.addEventListener("click", () => {
        const mood = card.getAttribute("data-mood");
        const selectedMood = moodSongs[mood];

        if (!selectedMood) return;

        recommendationTitle.textContent = selectedMood.title;
        songList.innerHTML = "";

        selectedMood.songs.forEach(song => {
            const songCard = document.createElement("div");
            songCard.classList.add("song-card");

            songCard.innerHTML = `
                <p class="song-title">🎵 ${song.name}</p>
                <a href="${song.link}" target="_blank" class="listen-btn">
                    Listen
                </a>
            `;

            songList.appendChild(songCard);
            recommendationsSection.classList.remove("hidden");
        });
    });
});

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");

// Open the modal
aboutBtn.addEventListener("click", () => {
    aboutModal.classList.remove("hidden");
});

// Close when clicking the X
closeModal.addEventListener("click", () => {
    aboutModal.classList.add("hidden");
});

// Close when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === aboutModal) {
        aboutModal.classList.add("hidden");
    }
});