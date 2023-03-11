const express = require("express");
//Essam
var ProductsRoutes = require("./Routes/products")
var OffersRoutes = require("./Routes/offers")
var ReviewsRoutes = require("./Routes/reviews")
//Marina
var catRoute = require("./routes/category")
var paymentRoute = require("./routes/payment")

//////////magdy
<<<<<<< HEAD
const copounsRoutes = require("./routes/copouns")

=======
const copounsRoutes=require("./routes/copouns")
>>>>>>> 69744d62cebeb46db2472eaf926dbf1fdb8c9c89
/// Fatma
const ordersRoutes = require("./routes/orders")
const userRouters = require("./routes/user")
const cartRouts = require("./routes/cart")

const app = express();
const port = process.env.PORT
require("./db/mongoos");

//Essam
app.use("/Products", ProductsRoutes)
app.use("/Offers", OffersRoutes)
app.use("/Reviews", ReviewsRoutes)

//Marina
app.use('/category', catRoute)
app.use('/payment', paymentRoute)

//magdy 
app.use("/copouns", copounsRoutes)

// Fatma 
app.use("/orders", ordersRoutes)
app.use("/users", userRouters)
app.use("/cart", cartRouts)

/// Fatma 
app.use("/orders", ordersRoutes)
app.use("/users", userRouters)
app.use("/cart", cartRouts)


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(` app listening`));
