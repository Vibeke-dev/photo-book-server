const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Book = require("../models/Book.model");

//  CREATE - POST /api/book  -  Create a new book
router.post("/book", (req, res, next) => {
  const { selectedPictures, price } = req.body;

  console.log(price);
  Book.create({ picture: selectedPictures, price })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
