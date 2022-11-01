const booksContainer = document.querySelector('.books-container');
export default class Books {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    if (data.title === '' || data.author === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter a title and author');
    } else {
      const id = this.list.length + 1;
      data.id = id;
      this.list.push(data);
      localStorage.setItem('data', JSON.stringify(this.list));
      this.show(data, this.list.length - 1);
      const removeButton = document.querySelector(
        `#book-${this.list.length - 1}`,
      );
      removeButton.addEventListener('click', (e) => {
        const { id } = e.target;
        const index = id.substring(id.indexOf('-') + 1, id.length);
        this.remove(parseInt(index, 10));
      });
    }
  }

  remove(c) {
    this.list.splice(c, 1);
    localStorage.setItem('data', JSON.stringify(this.list));
    this.getData();
  }

  // eslint-disable-next-line class-methods-use-this
  show(item, index) {
    if (booksContainer.innerHTML === 'No thing books here') {
      booksContainer.innerHTML = '';
    }
    const bookContent = document.createElement('div');
    const text = `
              <p class="book-title">${item.title}</p>
              <p class="book-author">${item.author}</p>
              <button class="removebtn" type="button" id="book-${index}">Remove</button>
          
            `;
    bookContent.innerHTML = text;
    booksContainer.appendChild(bookContent);
  }

  getData() {
    if (this.list.length > 0) {
      booksContainer.innerHTML = '';
      this.list.forEach((book, index) => {
        this.show(book, index);
      });
      const removeButton = document.querySelectorAll('.removebtn');
      removeButton.forEach((item) => {
        item.addEventListener('click', (e) => {
          const { id } = e.target;
          const index = id.substring(id.indexOf('-') + 1, id.length);
          this.remove(parseInt(index, 10));
        });
      });
    } else {
      booksContainer.innerHTML = 'No thing books here';
    }
  }
}
