const photoLinks = document.querySelectorAll('.photos-item input');
let activeLink = 0;

photoLinks.forEach(el => {
  el.addEventListener('change', setActive);
}); 

function setActive() {
  for (let i = 0; i < photoLinks.length; i++) {
    if(photoLinks[i].checked === true) {
      activeLink = i;
    }
  }
}

function getActiveLink() {
  return activeLink;
}

export default getActiveLink;

