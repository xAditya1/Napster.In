// album.js
function viewAlbum(artistName, songs) {
    const modalTitle = document.getElementById('modalTitle');
    const songListContainer = document.getElementById('songList');
    const audioPlayer = document.getElementById('audioPlayer');

    // Clear existing content
    songListContainer.innerHTML = '';
    audioPlayer.innerHTML = '';

    // Set modal title
    modalTitle.innerText = artistName + ' Album';

    // Populate the song list dynamically
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.innerText = song.name;
        listItem.onclick = () => playSong(song.file);
        songListContainer.appendChild(listItem);
    });

    // Display the modal
    document.getElementById('songModal').style.display = 'block';
}

function closeModal() {
    // Close the modal
    document.getElementById('songModal').style.display = 'none';
}

function playSong(songFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = '/Songs/' + songFile; // Update the path based on your file structure
    audioPlayer.play();
}
