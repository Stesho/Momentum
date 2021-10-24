import getTimeOfDay from './time-and-greeting.js';

const bg = document.querySelector('body');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
let imgNum = getRandomNum();

function setBg() {
  const img = new Image();
  let timeOfDay = getTimeOfDay();

  img.src = `https://raw.githubusercontent.com/Stesho/stage1-tasks/assets/images/${timeOfDay}/${String(imgNum).padStart(2, '0')}.jpg`;
  img.onload = () => { 
    bg.style.backgroundImage = `url(${img.src})`;
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
