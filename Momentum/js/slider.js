import getTimeOfDay from './time-and-greeting.js';
import getActiveLink from './setting.js';

const bg = document.querySelector('body');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
let imgNum = getRandomNum();

function setBg() {
  const img = new Image();
  let timeOfDay = getTimeOfDay();
  let links = [
    `https://raw.githubusercontent.com/Stesho/stage1-tasks/assets/images/${timeOfDay}/${String(imgNum).padStart(2, '0')}.jpg`,
    `https://source.unsplash.com/random/1920x1080/?${timeOfDay}/${String(imgNum)}`,
  ];

  img.src = links[getActiveLink()];
  img.onload = () => { 
    bg.style.backgroundImage = `url("${img.src}")`;
  }
}

function getRandomNum() {
  const min = 1;
  const max = 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

next.addEventListener('click', () => {
  imgNum === 20 ? imgNum = 1 : imgNum++;
  setBg();
});

prev.addEventListener('click', () => {
  imgNum === 1 ? imgNum = 20 : imgNum--;
  setBg();
});

setBg();

// https://source.unsplash.com/featured/?{KEYWORD},{KEYWORD}
// Например, 
// https://source.unsplash.com/?nature,water
// или с размерами
// https://source.unsplash.com/1600x900/?nature,water


// https://images.unsplash.com/photo-1515311320503-6e3d309537b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjM1MjAzNjI3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920