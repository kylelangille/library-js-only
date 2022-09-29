"use strict";
const overlay = document.querySelector(".overlay");
const addReadBookBtn = document.getElementById("add-read-book--btn");
const addUnreadBookBtn = document.querySelector(".add-unread-book--btn");
const addBookForm = document.querySelector(".add-read-book--form");
const closeFormBtn = document.querySelector(".form-close--btn");

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
      readBooks.push(newReadBook);
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
      unreadBooks.push(newUnreadBook);
    }
  }

  removeUnreadBook(title) {
    this.unreadBooks = this.unreadBooks.filter((book) => book.title !== title);
  }

  getUnreadBook(title) {
    return this.unreadBooks.find((book) => book.title === title);
  }

  isInUnreadLibrary(newUnreadBook) {
    return this.unreadBooks.come((book) => book.title === newUnreadBook.title);
  }
}

const unreadLibrary = new UnreadLibrary();

addReadBookBtn.addEventListener("click", function () {
  addBookForm.classList.add("active");
  overlay.classList.add("active");
});

closeFormBtn.addEventListener("click", function () {
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
});
