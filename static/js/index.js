import Books from '../../modules/booksclass.js';
// eslint-disable-next-line max-classes-per-file
// All required elements
import {
  listLink,
  addNewLink,
  contactLink,
  seeList,
  sectionOne,
  sectionTwo,
  sectionThree,
  close,
  message,
} from '../../modules/elements.js';

import { DateTime } from './luxon.js';

// start Awesome class
class Awesome {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// end Awesome class

// start Add method
const addBtn = document.querySelector('#addButton');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Awesome();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  // eslint-disable-next-line no-use-before-define
  books.add(book);
  message.classList.remove('display');
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

// end Add method
// start Books class
const books = new Books();
books.getData();
// end Books class

// start SPA
listLink.addEventListener('click', () => {
  sectionOne.classList.remove('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.add('display');
});
addNewLink.addEventListener('click', () => {
  sectionOne.classList.add('display');
  sectionTwo.classList.remove('display');
  sectionThree.classList.add('display');
});
contactLink.addEventListener('click', () => {
  sectionOne.classList.add('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.remove('display');
});
seeList.addEventListener('click', () => {
  sectionOne.classList.remove('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.add('display');
  message.classList.add('display');
});
// end SPA

// start Time
const time = document.querySelector('#timeText');
const date = new Date();
time.textContent = `Today is ${date.toDateString()}`;
close.addEventListener('click', () => {
  message.classList.add('display');
});
// end Time

setInterval(() => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
}, 1000);