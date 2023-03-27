const router = require("express").Router();
const cartControl = require("../controllers/cartControl")
const { isUser, isAdmin } = require("../middeleware/auth");


// Get
router.get("/", isUser, cartControl.getCart);

// GET CART BY USER ID
router.get("/:id", isAdmin, cartControl.getCartByUserID);

// ADD TO CART
router.post("/", isUser, cartControl.addToCart);

// edit
router.put("/update/:id", isUser, cartControl.updateQuantity);

// DELETE CART
router.delete("/:id", isUser, cartControl.deleteFromCart);


module.exports = router;
