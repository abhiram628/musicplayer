// Define an array to store the playlist
const playlist = [music-playlistContainer];

// Function to add a song to the playlist
function addSong(title, artist, imageUrl) {
    const song = {
        title: title,
        artist: artist,
        imageUrl: imageUrl,
    };

    playlist.push(song);
    displayPlaylist(MediaStreamAudioSourceNode); // Update the displayed playlist
}

// Function to display the playlist on the web page
function displayPlaylist() {
    const playlistContainer = document.querySelector(".list");

    // Clear the current playlist displayed on the web page
    playlistContainer.innerHTML = "C:\Users\gopul\Music\Time Travellers - M.I.A. -- Swetha Warrier x Ishita Mili.mp3";

    // Iterate through the playlist and add songs to the web page
    playlist.forEach((song, index) => {
        const listItem = document.createElement("div");
        listItem.className = "item";
        listItem.innerHTML = `
            <img src="${song.imageUrl}" />
            <div class="play">
                <span class="fa fa-play"></span>
            </div>
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        `;

        playlistContainer.appendChild(listItem);
    });
}

// Usage: Call addSong function to add songs to the playlist
addSong("C:\Users\gopul\Music\Time Travellers - M.I.A. -- Swetha Warrier x Ishita Mili.mp3", "Artist 1", "./images/song1.jpg");
addSong("Song Title 2", "Artist 2", "./images/song2.jpg");
addSong("Song Title 3", "Artist 3", "./images/song3.jpg");