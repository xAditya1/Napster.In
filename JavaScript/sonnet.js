// sonnet.js
// JavaScript for the Sonnet page

// Mock data for initial user and music posts
const initialUser = {
    name: 'Ritik',
    profilePic: 'path/to/profile-pic.jpg',
};

const initialMusicPosts = [
    {
        user: initialUser,
        songTitle: 'Example Song 1',
        artistName: 'Sample Artist',
        musicFile: 'path/to/music-file1.mp',
    },
    {
        user: initialUser,
        songTitle: 'Example Song 2',
        artistName: 'Sample Artist',
        musicFile: 'path/to/music-file2.mp3',
    },
];

// Function to initialize music feed with initial posts
function initializeMusicFeed() {
    const musicFeed = document.getElementById('musicFeed');
    initialMusicPosts.forEach((post) => {
        displayMusicPost(post.user, post.songTitle, post.artistName, post.musicFile);
    });
}

// Function to handle music submission
function submitMusic(event) {
    event.preventDefault(); // Prevent the default form submission

    const songTitle = document.getElementById('songTitle').value;
    const artistName = document.getElementById('artistName').value;
    const musicFile = document.getElementById('musicFile').value; // Replace with your actual file handling logic

    // Call function to create and display the music post
    displayMusicPost(initialUser, songTitle, artistName, musicFile);

    // Reset form fields
    document.getElementById('songTitle').value = '';
    document.getElementById('artistName').value = '';
    document.getElementById('musicFile').value = '';
}

// Function to display a music post
function displayMusicPost(user, songTitle, artistName, musicFile) {
    const musicFeed = document.getElementById('musicFeed');

    // Create post elements
    const musicPost = document.createElement('div');
    musicPost.classList.add('music-post');

    const userSection = document.createElement('div');
    userSection.classList.add('user-section');

    const profilePic = document.createElement('img');
    profilePic.src = user.profilePic;
    profilePic.alt = 'Profile Pic';
    userSection.appendChild(profilePic);

    const userInfo = document.createElement('p');
    userInfo.textContent = user.name;
    userSection.appendChild(userInfo);

    const musicInfo = document.createElement('div');
    musicInfo.classList.add('music-info');

    const musicTitle = document.createElement('p');
    musicTitle.classList.add('music-title');
    musicTitle.textContent = `${artistName} - ${songTitle}`;
    musicInfo.appendChild(musicTitle);

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = musicFile;
    musicInfo.appendChild(audio);

    // Append elements to the post
    musicPost.appendChild(userSection);
    musicPost.appendChild(musicInfo);

    // Add post to the music feed
    musicFeed.appendChild(musicPost);
}

// Initialize the music feed with initial posts
initializeMusicFeed();
