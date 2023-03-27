const express = require("express");
var router = express.Router();
var {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.js");
const fs = require("fs");
var catModel = require("../models/category");
const { auth } = require("../Middleware/auth");

router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

///
/**
 * app.get('/payment', (req, res) => {
  // Redirect to /demo2
  res.redirect(' send data to  api ');
});
 */

module.exports = router;
