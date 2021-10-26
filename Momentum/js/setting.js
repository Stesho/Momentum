// import setBg from "./slider";

const photoLinks = document.querySelectorAll('.photos-item input');
const settingsList = document.querySelectorAll('.settings-item');
const settings = document.querySelectorAll('.setting');
let activeLink = 0;

photoLinks.forEach(el => {
  el.addEventListener('change', setActive);
}); 

settingsList.forEach(el => {
  el.addEventListener('click', changeActiveSetting);
});

function changeActiveSetting(event) {
  for(let i = 0; i < settingsList.length; i++) {
    settingsList[i].classList.remove('settings-active');
    settings[i].classList.remove('show-setting');
  }
  event.target.classList.add('settings-active');
  // console.log(settings.classList);
  for(let i = 0; i < settingsList.length; i++) {
    if(settingsList[i].classList.contains('settings-active')) {
      settings[i].classList.add('show-setting');
    }
  }
  // console.log(settings[0].classList.contains(''));
  // console.log(settings);
}

function setActive() {
  for (let i = 0; i < photoLinks.length; i++) {
    if(photoLinks[i].checked === true) {
      activeLink = i;
    }
  }
  // setBg();
}

function getActiveLink() {
  return activeLink;
}

// export default getActiveLink;

