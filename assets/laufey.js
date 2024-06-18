const Mfalling = new Audio("/music/laufey/Falling Behind.mp3");
const Mbewitched = new Audio("/music/laufey/Laufey - Bewitched (Official Lyric Video with Chords).mp3");
const Mbored = new Audio("/music/laufey/Laufey - Bored (Official Audio With Lyrics).mp3");
const Mdreamer = new Audio("/music/laufey/Laufey - Dreamer (Official Lyric Video With Chords).mp3");
const Mgoddess = new Audio("/music/laufey/Laufey - Goddess (Official Music Video).mp3");
const Mhaunted = new Audio("/music/laufey/Laufey - Haunted (Official Lyric Video With Chords).mp3");
const Mletter = new Audio("/music/laufey/Laufey - Letter To My 13 Year Old Self (Official Audio).mp3");
const Mlovesick = new Audio("/music/laufey/Laufey - Lovesick (Official Lyric Video With Chords).mp3");
const Monlymine = new Audio("/music/laufey/Laufey - Only Mine (Official Audio for Bose's Turn The Dial Sessions).mp3");
const Mpromise = new Audio("/music/laufey/Laufey - Promise (Official Lyric Video With Chords).mp3");
const Msecond = new Audio("/music/laufey/Laufey - Second Best (Official Lyric Video With Chords).mp3");
const MbreakH = new Audio("/music/laufey/Let You Break My Heart Again - Laufey & Philharmonia Orchestra (Official Audio).mp3");
const Mvalentine = new Audio("/music/laufey/Valentine.mp3");
const Mmagnolia = new Audio("/music/laufey/Laufey - Magnolia (Official Audio).mp3");
const Mbeautiful = new Audio("/music/laufey/Laufey - Beautiful Stranger (Official Audio).mp3");

const tracks = [
  { audio: Mfalling, elementId: 'falling' },
  { audio: Mbewitched, elementId: 'bewitched' },
  { audio: Mbored, elementId: 'bored' },
  { audio: Mdreamer, elementId: 'dreamer' },
  { audio: Mgoddess, elementId: 'goddess' },
  { audio: Mhaunted, elementId: 'haunted' },
  { audio: Mletter, elementId: 'letter' },
  { audio: Mlovesick, elementId: 'lovesick' },
  { audio: Monlymine, elementId: 'onlymine' },
  { audio: Mpromise, elementId: 'promise' },
  { audio: Msecond, elementId: 'second' },
  { audio: MbreakH, elementId: 'break' },
  { audio: Mvalentine, elementId: 'valentine' },
  { audio: Mmagnolia, elementId: 'magnolia' },
  { audio: Mbeautiful, elementId: 'beautiful' }
];

const allImages = document.querySelectorAll('.container img');

let currentTrackIndex = 0;

// Function to stop and reset all audio tracks except the currently playing one
function stopAllAudioExceptCurrent() {
  tracks.forEach((track, index) => {
    if (index !== currentTrackIndex) {
      track.audio.pause();
      track.audio.currentTime = 0;
      track.playing = false;
      document.querySelector(`#${track.elementId} img`).classList.remove('spin');
    }
  });
}

// Function to play or pause a specific track by index
function playPauseTrack(index) {
  const track = tracks[index];
  
  if (track.playing) {
    // Pause the track
    track.audio.pause();
    document.querySelector(`#${track.elementId} img`).classList.remove('spin');
  } else {
    // Stop all other tracks
    stopAllAudioExceptCurrent();
    
    // Play the track
    track.audio.play();
    document.querySelector(`#${track.elementId} img`).classList.add('spin');
  }
  
  // Toggle the 'playing' state
  track.playing = !track.playing;
}

// Function to play a specific track by index
function playTrack(index) {
  stopAllAudioExceptCurrent();
  currentTrackIndex = index;
  playPauseTrack(index);
}

// Function to play the next track
function playNextTrack() {
  let nextIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(nextIndex);
}

// Add event listeners to play each track
tracks.forEach((track, index) => {
  document.getElementById(track.elementId).addEventListener('click', () => playTrack(index));
});

// Add event listener for each audio to play the next track when it finishes
tracks.forEach(track => {
  track.audio.addEventListener('ended', playNextTrack);
});

// CSS for spinning animation
const style = document.createElement('style');
style.innerHTML = `
    .spin {
        animation: spin 2s linear infinite;
    }
    
    @keyframes spin {
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
