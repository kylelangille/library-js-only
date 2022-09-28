"use strict";
const overlay = document.querySelector(".overlay");
const addReadBookBtn = document.querySelector(".add-read-book--btn");
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
}

class UnreadLibrary {
  constructor() {
    this.unreadBooks = [];
  }
}

function addBookToReadLibrary() {}

addReadBookBtn.addEventListener("click", function () {
  addBookForm.classList.add("active");
  overlay.classList.add("active");
});

closeFormBtn.addEventListener("click", function () {
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
});
