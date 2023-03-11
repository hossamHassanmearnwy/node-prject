const express = require("express")
const router = express.Router();
const orderModel = require("../models/orderModel");
const { auth, isAdmin, isUser } = require("../middeleware/auth");
const orderController = require("../controllers/ordersControl");



router.use(auth)

// add order
router.post("/", isUser, orderController.addOrder);

// get by id
router.get("/:id", auth, orderController.getByID);

// get all orders
router.get("/", isAdmin, orderController.getAllOrders);

// delete order by id
router.delete("/:id", isAdmin, orderController.deleteById);




module.exports = router