const express = require("express");
const fs = require("fs");
var router = express.Router();
router.get("/", (req, res) => {
  res.sendFile("../db/translate.json");
});
module.exports = router;
///
