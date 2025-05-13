// This is a simple JavaScript to handle the play/pause functionality
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');

audioPlayer.addEventListener('play', () => {
    songTitle.textContent = "Playing: Your Song Title";
});

audioPlayer.addEventListener('pause', () => {
    songTitle.textContent = "Paused: Your Song Title";
});
