const express = require("express");
const books = require("./models/books");

const app = express();

// Add a GET handler on the "/books" route that responds with the collection of
// books in an `application/json` response body.

app.use(express.json())

app.get("/books", (req, res) => {
    res.send(books)
})

// Add a GET handler on the "/books/:isbn" route that responds with a single
// book in an `application/json` response body. If the book is not found,
// respond with the Not Found status.

app.get("/books/:isbn", (req, res) => {
    for (let book of books) {
        if (book.isbn === req.params.isbn) {
            res.send(book)
        }
    }

    res.sendStatus(404)
})


module.exports = app;
