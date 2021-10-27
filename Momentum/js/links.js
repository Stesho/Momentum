const plusBtn = document.querySelector('.add-icon');
const binBtn = document.querySelector('.delete-icon');
const linksList = document.querySelector('.links-list');
const input = document.querySelector('.links-controls input');
const linksBtn = document.querySelector('.links-icon');
const linksFrame = document.querySelector('.links-frame');
let isOpen = false;

linksBtn.addEventListener('click', showFrame);
plusBtn.addEventListener('click', addLink);
binBtn.addEventListener('click', deleteLink);

function showFrame() {
  if(isOpen) {
    linksFrame.style.display = 'none';
    isOpen = false;
  }
  else {
    linksFrame.style.display = 'block';
    isOpen = true;
  }
}

function addLink() {
  if(input.value === '') {
    return;
  }

  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = input.value;
  a.href = input.value;
  a.target = '_blank';
  li.classList.add('links-item');

  input.value = '';

  li.append(a);
  linksList.append(li);
}

function deleteLink() {
  const links = document.querySelectorAll('.links-list a');

  for(let i = 0; i < links.length; i++) {
    if(links[i].textContent === input.value) {
      links[i].parentNode.remove();
    }
  }

  input.value = '';
}
