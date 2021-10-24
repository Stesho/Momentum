const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const update = document.querySelector('.change-quote');

update.addEventListener('click', getQuotes);

async function getQuotes() {  
  const quotes = './assets/JSON/quotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const min = 1;
  const max = data.length;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  
  quote.textContent = `"${data[num].text}"`;
  author.textContent = data[num].author;
}

getQuotes();