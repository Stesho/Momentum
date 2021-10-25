import sounds from "./soundsList.js";

const player = document.querySelector('.audio');
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playList = document.querySelector('.play-list');
let active = 0;
let isPlay = false;
let playItems;

playBtn.addEventListener('click', toggleAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

async function createList() {
  for(let i = 0; i < sounds.length; i++) {
    const li = document.createElement('li');
    li.classList = 'play-item';
    li.textContent = sounds[i].name;
    playList.append(li);
  }
  playItems = document.querySelectorAll('.play-item');
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
  playItems[active].classList.add('item-active');
}

function playNext() {
  playItems[active].classList.remove('item-active');
  active === sounds.length-1 ? active=0 : active++;
  playItems[active].classList.add('item-active');
  player.src = sounds[active].src;

  if(!isPlay) {
    toggleAudio();
  }
  else {
    player.play();
  }

}

function playPrev() {
  playItems[active].classList.remove('item-active');
  active === 0 ? active=sounds.length-1 : active--;
  playItems[active].classList.add('item-active');
  player.src = sounds[active].src;

  if(!isPlay) {
    toggleAudio();
  }
  else {
    player.play();
  }
}

createList();