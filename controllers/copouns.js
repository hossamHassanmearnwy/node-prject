const copounsModel = require("../models/copouns");

function createCopouns(copouns) {
  return copounsModel.create(copouns);
}

function getAllcopouns(copouns) {
  return copounsModel.find(copouns);
}

module.exports = { createCopouns, getAllcopouns };
