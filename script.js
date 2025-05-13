const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const nowPlaying = document.getElementById('nowPlaying');

let tracks = [];
let currentTrack = 0;

fileInput.addEventListener('change', function () {
  tracks = Array.from(this.files);
  renderPlaylist();
  playTrack(0);
});

function renderPlaylist() {
  playlist.innerHTML = '';
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.name;
    li.addEventListener('click', () => playTrack(index));
    playlist.appendChild(li);
  });
}

function playTrack(index) {
  currentTrack = index;
  const track = tracks[index];
  audioPlayer.src = URL.createObjectURL(track);
  nowPlaying.textContent = `Now playing: ${track.name}`;
  highlightTrack();
  audioPlayer.play();
}

function highlightTrack() {
  const lis = playlist.querySelectorAll('li');
  lis.forEach((li, idx) => {
    li.classList.toggle('active', idx === currentTrack);
  });
}

audioPlayer.addEventListener('ended', () => {
  if (currentTrack < tracks.length - 1) {
    playTrack(currentTrack + 1);
  }
});
