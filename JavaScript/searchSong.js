function searchSongs() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var songs = document.querySelectorAll('.song');

    songs.forEach(function (song) {
        var title = song.querySelector('.song-details h3').innerText.toLowerCase();
        var artist = song.querySelector('.song-details p').innerText.toLowerCase();
        var match = title.includes(searchInput) || artist.includes(searchInput);

        // Show or hide songs based on search match
        song.style.display = match ? 'flex' : 'none';
    });
}