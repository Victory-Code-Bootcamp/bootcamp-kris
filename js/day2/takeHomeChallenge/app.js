const bookObject = require("./js/book-data.js");

console.log(bookObject);

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/practice", (req, res) => {
  res.render("practice", { books: bookObject.books });
});

app.get("/books", (req, res) => {
  res.send(bookObject.books);
});

app.get("/book/:id", (req, res) => {
  const chosenBook = bookObject.books.filter(
    (book) => book.isbn === req.params.id
  );
  res.send(chosenBook);
});

app.get("/deleteBook/:id", (req, res) => {
  const deleteBook = bookObject.books.filter(
    (book) => book.isbn !== req.params.id
  );
  bookObject.books = deleteBook;
  // res.send(`The book ${req.params.id} was deleted.`);
  res.redirect("/practice");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
