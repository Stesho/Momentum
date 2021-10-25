import sounds from "./soundsList.js";

const player = document.querySelector('.audio');
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playList = document.querySelector('.play-list');

const progressBar = document.querySelector('.progress');
const currTime = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const timeline = document.querySelector('.player-timeline');
const playerTitle = document.querySelector('.player-title');

const volumeLine = document.querySelector('.volume-line');
const volumeProgress = document.querySelector('.volume-progress');
const volumeIcon = document.querySelector('.volume-icon');

let active = 0;
let isPlay = false;
let playItems;

// volumeIcon.addEventListener('click', () => );
volumeLine.addEventListener('click', updateVolume);
timeline.addEventListener('click', handleUpdateProgress);
playBtn.addEventListener('click', toggleAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);
player.addEventListener('loadeddata', () => {
  playerTitle.textContent = sounds[active].name;
  duration.textContent = getTimeCodeFromNum(player.duration)
});

async function initPlayer() {
  for(let i = 0; i < sounds.length; i++) {
    const li = document.createElement('li');
    li.classList = 'play-item';
    li.textContent = sounds[i].name;
    playList.append(li);
  }
  playItems = document.querySelectorAll('.play-item');

  player.volume = 0.75;
  volumeProgress.style.width = '75%';
  playerTitle.textContent = sounds[active].name;
  duration.textContent = getTimeCodeFromNum(player.duration);
}

function toggleAudio() {
  playBtn.classList.toggle('play');
  playBtn.classList.toggle('pause');
  if(isPlay) {
    player.pause();
    isPlay = false;
  }
  else {
    player.play();
    isPlay = true;
  }
  playItems[active].classList.add('active-audio');
}

function playNext() {
  playItems[active].classList.remove('active-audio');
  active === sounds.length-1 ? active=0 : active++;
  playItems[active].classList.add('active-audio');
  player.src = sounds[active].src;

  if(!isPlay) {
    toggleAudio();
  }
  else {
    player.play();
  }
}

function playPrev() {
  playItems[active].classList.remove('active-audio');
  active === 0 ? active=sounds.length-1 : active--;
  playItems[active].classList.add('active-audio');
  player.src = sounds[active].src;
  
  if(!isPlay) {
    toggleAudio();
  }
  else {
    player.play();
  }
}

function handleUpdateProgress(e) {
  const timelineWidth = timeline.offsetWidth;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * player.duration;
  player.currentTime = timeToSeek;
}

function updateVolume(e) {
  const sliderWidth = volumeLine.offsetWidth;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  player.volume = newVolume;
  volumeProgress.style.width = newVolume * 100 + '%';

  if(player.volume === 0.75) {
    volumeIcon.style.backgroundImage = 'url("../assets/svg/volume-mute.svg")';
  }
  else if(player.volume < 0.30) {
    volumeIcon.style.backgroundImage = 'url("../assets/svg/volume-low.svg")';
  }
  else if(player.volume < 0.70) {
    volumeIcon.style.backgroundImage = 'url("../assets/svg/volume-medium.svg")';
  }
  else {
    volumeIcon.style.backgroundImage = 'url("../assets/svg/volume-high.svg")';
  }
}

function updateProgress() {
  setInterval(() => {
    progressBar.style.width = player.currentTime / player.duration * 100 + "%";
    currTime.textContent = getTimeCodeFromNum(player.currentTime);

    if(player.currentTime === player.duration) {
      playNext();
    }
  }, 500);
}

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

updateProgress();
initPlayer();