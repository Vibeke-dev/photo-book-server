const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Book = require("../models/Book.model");

//  CREATE - POST /api/book  -  Create a new book
router.post("/book", (req, res, next) => {
  const { selectedPictures, price } = req.body;

  Book.create({ picture: selectedPictures, price })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//READ
router.get("/book", (req, res, next) => {
  Book.find()
    .then((allBooks) => res.json(allBooks))
    .catch((err) => res.json(err));
});

//DELETE
router.delete("/book/:bookId", (req, res, next) => {
  const { bookId } = req.params;

  Book.findByIdAndRemove(bookId)
    .then(() =>
      res.json({
        message: `Picture with ${bookId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});


module.exports = router;
