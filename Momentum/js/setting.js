import setBg from "./slider.js";

const photoLinks = document.querySelectorAll('.photos-item input');
const settingsList = document.querySelectorAll('.settings-item');
const settings = document.querySelectorAll('.setting');
const settingsFrame = document.querySelector('.settings');
const settingsIcon = document.querySelector('.settings-icon');
const visibleBlock = document.querySelectorAll('.block-item input');
let activeLink = 0;
let isOpen = false;

settingsIcon.addEventListener('click', showFrame);
window.addEventListener('beforeunload', setHiddenBlock);

window.addEventListener('load', () => {
  getHiddenBlock();
  for(let i = 0; i < visibleBlock.length; i++) {
    if(visibleBlock[i].checked === false) {
      hide(i+1);
    }
  }
});

photoLinks.forEach(el => {
  el.addEventListener('change', setActive);
}); 

settingsList.forEach(el => {
  el.addEventListener('click', changeActiveSetting);
});

visibleBlock.forEach(el => {
  el.addEventListener('change', hideBlock);
});

function hideBlock(event) {
  hide(Number(event.target.value));
}

function hide(num) {
  let block;
  switch(num) {
    case 1:
      block = document.querySelector('.weather');
      break;
    case 2:
      block = document.querySelector('.player');
      break;
    case 3:
      block = document.querySelector('.greeting-container');
      break;
    case 4:
      block = document.querySelector('.time');
      break;
    case 5:
      block = document.querySelector('.date');
      break;
    case 6:
      block = document.querySelector('.quotes');
      break;
  }
  block.classList.toggle('hidden');
}

function showFrame() {
  if(isOpen) {
    settingsFrame.style.display = 'none';
    isOpen = false;
  }
  else {
    settingsFrame.style.display = 'flex';
    isOpen = true;
  }
}

function changeActiveSetting(event) {
  for(let i = 0; i < settingsList.length; i++) {
    settingsList[i].classList.remove('settings-active');
    settings[i].classList.remove('show-setting');
  }
  event.target.classList.add('settings-active');
  
  for(let i = 0; i < settingsList.length; i++) {
    if(settingsList[i].classList.contains('settings-active')) {
      settings[i].classList.add('show-setting');
    }
  }
}

function setActive() {
  for (let i = 0; i < photoLinks.length; i++) {
    if(photoLinks[i].checked === true) {
      activeLink = i;
    }
  }
  setBg();
}

function setHiddenBlock() {
  visibleBlock.forEach(el => {
    localStorage.setItem(`${el.value}`, el.checked);
  });
}

function getHiddenBlock() {
  visibleBlock.forEach(el => {
    el.checked = localStorage.getItem(`${el.value}`) === 'true' ? true : false;
  });
}

function getActiveLink() {
  return activeLink;
}

export default getActiveLink;
