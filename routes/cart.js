const router = require("express").Router();
const cartControl= require("../controllers/cartControl")
const { isUser, isAdmin } = require("../middlewares/auth");


// get
router.get("/", isUser, cartControl.getCart);

// GET CART BY USER ID
router.get("/:id", isAdmin,cartControl.getCartByUserID);

// ADD TO CART
router.post("/", isUser,cartControl.addToCart);

// DELETE CART
router.delete("/:id", isUser,cartControl.deleteFromCart);


module.exports = router;