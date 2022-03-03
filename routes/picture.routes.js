const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// FileUploader
const fileUploader = require("../config/cloudinary.config");

const Picture = require("../models/Picture.model");

const User = require("../models/User.model");

// POST "/api/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // Get the URL of the uploaded file and send it as a response.
  // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
  res.json({ fileUrl: req.file.path });
});

//  POST /api/pictures  -  Creates a new picture with userID
router.post("/pictures", (req, res, next) => {
  const { title, description, imageUrl, user } = req.body;

  Picture.create({ title, description, imageUrl, user })
    .then((addUser) => {
      return User.findByIdAndUpdate(email, {
        $push: { user: addUser._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/pictures -  Retrieves all of the pictures
router.get("/pictures", (req, res, next) => {
  Picture.find()
    .then((allPictures) => res.json(allPictures))
    .catch((err) => res.json(err));
});

//  GET /api/pictures/:pictureId -  Retrieves a specific picture by id
router.get("/pictures/:pictureId", (req, res, next) => {
  const { pictureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(pictureId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Picture.findById(pictureId)
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.json(error));
});

// PUT  /api/pictures/:pictureId  -  Updates a specific picture by id
router.put("/pictures/:pictureId", (req, res, next) => {
  const { pictureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(pictureId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Picture.findByIdAndUpdate(pictureId, req.body, { new: true })
    .then((updatedPicture) => res.json(updatedPicture))
    .catch((error) => res.json(error));
});

// DELETE  /api/pictures/:pictureId  -  Deletes a specific picture by id
router.delete("/pictures/:pictureId", (req, res, next) => {
  const { pictureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(pictureId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Picture.findByIdAndRemove(pictureId)
    .then(() =>
      res.json({
        message: `Picture with ${pictureId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
