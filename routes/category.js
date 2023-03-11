
const express = require('express');
var router = express.Router();
var {createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category.js')
const fs = require('fs')
var catModel = require('../models/category')
const {auth}= require('../middeleware/auth')


router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)







module.exports=router;