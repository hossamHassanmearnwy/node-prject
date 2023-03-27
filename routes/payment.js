const express = require("express");
var router = express.Router();
var {
  getPayments,
  getPayment,
  deletePayment,
} = require("../controllers/payment.js");
const fs = require("fs");
var payModel = require("../models/payment");
const { auth } = require("../Middleware/auth");

router.route("/").get(getPayments);
router.route("/:id").get(getPayment).delete(deletePayment);

module.exports = router;
