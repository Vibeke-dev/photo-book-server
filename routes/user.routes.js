const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

//Get user by id "/api/user/:userId"
router.get("/user/:userId", (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((userInfo) => res.status(200).json(userInfo))
    .catch((error) => res.json(error));
});

module.exports = router;