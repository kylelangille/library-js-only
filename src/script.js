"use strict";
const overlay = document.querySelector(".overlay");
const addReadBookBtn = document.getElementById("add-read-book--btn");
const addUnreadBookBtn = document.getElementById("add-unread-book--btn");
const addBookForm = document.querySelector(".add-read-book--form");
const addUnreadBookForm = document.querySelector(".add-unread-book--form");
const closeFormBtn = document.querySelector(".form-close--btn");
const closeUnreadFormBtn = document.querySelector(".unread-form-close--btn");

const readBooksGrid = document.querySelector(".read-books--container");
const unreadBooksGrid = document.querySelector(".unread-books--container");

//////////////////////////////
//Object Structures
class Book {
  constructor(title = "Unknown", author = "Unknown") {
    this.title = title;
    this.author = author;
  }
}

class ReadLibrary {
  constructor() {
    this.readBooks = [];
  }

  addReadBook(newReadBook) {
    if (!this.isInReadLibrary(newReadBook)) {
      this.readBooks.push(newReadBook);
    }
  }

  removeReadBook(title) {
    this.readBooks = this.readBooks.filter((book) => book.title !== title);
  }

  getReadBook(title) {
    return this.readBooks.find((book) => book.title === title);
  }

  isInReadLibrary(newReadBook) {
    return this.readBooks.some((book) => book.title === newReadBook.title);
  }
}

const readLibrary = new ReadLibrary();

class UnreadLibrary {
  constructor() {
    this.unreadBooks = [];
  }

  addUnreadBook(newUnreadBook) {
    if (!this.isInUnreadLibrary(newUnreadBook)) {
      this.unreadBooks.push(newUnreadBook);
    }
  }

  removeUnreadBook(title) {
    this.unreadBooks = this.unreadBooks.filter((book) => book.title !== title);
  }

  getUnreadBook(title) {
    return this.unreadBooks.find((book) => book.title === title);
  }

  isInUnreadLibrary(newUnreadBook) {
    return this.unreadBooks.some((book) => book.title === newUnreadBook.title);
  }
}

const unreadLibrary = new UnreadLibrary();

///////////////////////////////////
//Opening and closing modals
addReadBookBtn.addEventListener("click", function () {
  addBookForm.classList.add("active");
  overlay.classList.add("active");
});

addUnreadBookBtn.addEventListener("click", function () {
  addUnreadBookForm.classList.add("active");
  overlay.classList.add("active");
});

closeFormBtn.addEventListener("click", function () {
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
});

closeUnreadFormBtn.addEventListener("click", function () {
  addUnreadBookForm.classList.remove("active");
  overlay.classList.remove("active");
});

/////////////////////////////////////////
//Creating book cards
const createBookCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const deleteBookBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  deleteBookBtn.classList.add("remove-book");

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  deleteBookBtn.textContent = `Remove book`;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(deleteBookBtn);
  readBooksGrid.appendChild(bookCard);

  deleteBookBtn.onclick = removeReadBook;
};

const createUnreadBookCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const deleteBookBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  deleteBookBtn.classList.add("remove-book");

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  deleteBookBtn.textContent = `Remove book`;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(deleteBookBtn);
  unreadBooksGrid.appendChild(bookCard);

  deleteBookBtn.onclick = removeUnreadBook;
};

const getBookFromReadBookForm = () => {
  const readTitle = document.getElementById("read-book-title--input").value;
  const readAuthor = document.getElementById("read-book-author--input").value;
  return new Book(readTitle, readAuthor);
};

const getBookFromUnreadBookForm = () => {
  const unreadTitle = document.getElementById("unread-book-title--input").value;
  const unreadAuthor = document.getElementById(
    "unread-book-author--input"
  ).value;
  return new Book(unreadTitle, unreadAuthor);
};

const updateReadBooksGrid = () => {
  resetReadBooksGrid();
  for (let book of readLibrary.readBooks) {
    createBookCard(book);
  }
};

const resetReadBooksGrid = () => {
  readBooksGrid.innerHTML = "";
};

const updateUnreadBooksGrid = () => {
  resetUnreadBooksGrid();
  for (let book of unreadLibrary.unreadBooks) {
    createUnreadBookCard(book);
  }
};

const resetUnreadBooksGrid = () => {
  unreadBooksGrid.innerHTML = "";
};

const addReadBook = (e) => {
  e.preventDefault();
  const newReadBook = getBookFromReadBookForm();

  if (readLibrary.isInReadLibrary(newReadBook)) {
    alert(`You've already entered this book`);
    return;
  }
  readLibrary.addReadBook(newReadBook);
  updateReadBooksGrid();
};

const addUnreadBook = (e) => {
  e.preventDefault();
  const newUnreadBook = getBookFromUnreadBookForm();

  if (unreadLibrary.isInUnreadLibrary(newUnreadBook)) {
    alert("You've already entered this book");
    return;
  }

  unreadLibrary.addUnreadBook(newUnreadBook);
  updateUnreadBooksGrid();
};

const removeReadBook = (e) => {
  const title = e.target.parentNode.firstChild.innerHTML.replaceAll("'", "");

  readLibrary.removeReadBook(title);
  updateReadBooksGrid();
};

const removeUnreadBook = (e) => {
  const title = e.target.parentNode.firstChild.innerHTML.replaceAll("'", "");

  unreadLibrary.removeUnreadBook(title);
  updateUnreadBooksGrid();
};

addBookForm.onsubmit = addReadBook;
addUnreadBookForm.onsubmit = addUnreadBook;
