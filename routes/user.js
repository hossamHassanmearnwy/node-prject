const express = require("express")
var router = express.Router();
const userController = require("../controllers/userControl")
const { isAdmin} = require("../middlewares/auth");


//create new user (register)
router.post("/register", userController.createUser);

//login
router.post("/login", userController.login);

//get all users
router.get("/", isAdmin, userController.getAllUsers);

//get user by id
router.get("/:id", userController.getUserById);

//delete by id
router.delete("/:id", userController.deleteUser);

//Admin Login
router.post("/log/admin", userController.adminLogin);
//Admin logout
router.get("/logout/:id", userController.Logout);



module.exports=router