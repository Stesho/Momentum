import setBg from "./slider.js";

const photoLinks = document.querySelectorAll('.photos-item input');
const settingsList = document.querySelectorAll('.settings-item');
const settings = document.querySelectorAll('.setting');
const settingsFrame = document.querySelector('.settings');
const settingsIcon = document.querySelector('.settings-icon');
let activeLink = 0;
let isOpen = false;

settingsIcon.addEventListener('click', showFrame);

photoLinks.forEach(el => {
  el.addEventListener('change', setActive);
}); 

settingsList.forEach(el => {
  el.addEventListener('click', changeActiveSetting);
});

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

function getActiveLink() {
  return activeLink;
}

export default getActiveLink;
