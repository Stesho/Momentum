const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');

export default function getTimeOfDay() {
  const currTime = new Date();
  const timeOfDay = currTime.getHours();
    
  if (timeOfDay >= 0 && timeOfDay < 6) {
    return 'night';
  }
  if (timeOfDay >= 6 && timeOfDay < 12) {
    return 'morning';
  }
  if (timeOfDay >= 12 && timeOfDay < 18) {
    return 'afternoon';
  }
  if (timeOfDay >= 18 && timeOfDay < 24) {
    return 'evening';
  }    
}

function showTime() {
  const currTime = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  time.textContent = currTime.toLocaleTimeString();
  date.textContent = currTime.toLocaleDateString('en-En', options);
  greeting.textContent = `Good ${getTimeOfDay()}`;

  setTimeout(showTime, 1000);
}

function setName() {
  localStorage.setItem('name', userName.value);
}

function getName() {
  if(localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setName);
window.addEventListener('load', getName);

showTime();


