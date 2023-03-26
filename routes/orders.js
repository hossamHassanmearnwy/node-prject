const express = require("express")
const router = express.Router();
const orderModel = require("../models/orderModel");
////// HEAD
const { auth, isAdmin, isUser } = require("../middeleware/auth");
////////
// const { auth,isAdmin,isUser } = require("../middeleware/auth");
// >>>>>>> 69744d62cebeb46db2472eaf926dbf1fdb8c9c89
const orderController = require("../controllers/ordersControl");



router.use(auth)

// add order
router.post("/", isUser, orderController.addOrder);

// update order 
router.put("/update/:id", isAdmin, orderController.updateOrder);

// get by id
router.get("/:id", orderController.getByID);

// get all orders
router.get("/", isAdmin, orderController.getAllOrders);

// delete order by id
router.delete("/:id", isAdmin, orderController.deleteById);




module.exports = router
