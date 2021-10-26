import getTimeOfDay from './time-and-greeting.js';
import getActiveLink from './setting.js';
import flickerLinks from './flickr.js';

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

  if(getActiveLink() === 2) {
    img.src = flickerLinks[timeOfDay][imgNum];
  }
  else {
    img.src = links[getActiveLink()];
  }
  img.onload = () => { 
    bg.style.backgroundImage = `url("${img.src}")`;
  }
}

function getRandomNum() {
  const min = 1;
  const max = 20;
  console.log('rand');
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

export default setBg;