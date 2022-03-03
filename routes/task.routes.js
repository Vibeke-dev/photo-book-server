const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const BookModel = require("../models/Book.model");
const Project = require("../models/Picture.model");

//  POST /api/tasks  -  Creates a new book
router.post("/tasks", (req, res, next) => {
  const { title, description, projectId } = req.body;

  BookModel.create({ title, description, project: projectId })
    .then((newTask) => {
      return Project.findByIdAndUpdate(projectId, {
        $push: { tasks: newTask._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
