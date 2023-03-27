const express = require("express");
//Essam
require('dotenv').config()
console.log(`process.env`)
var ProductsRoutes = require("./Routes/products");
var OffersRoutes = require("./Routes/offers");
var ReviewsRoutes = require("./Routes/reviews");
//Marina
var catRoute = require("./routes/category");
var paymentRoute = require("./routes/payment");
const dbConnection = require("./db/mongoos");
dbConnection();
//////////magdy
// <<<<<<< HEAD
// const copounsRoutes = require("./routes/copouns")

const copounsRoutes = require("./routes/copouns");
// >>>>>>> 69744d62cebeb46db2472eaf926dbf1fdb8c9c89

/// Fatma
const ordersRoutes = require("./routes/orders");
const userRouters = require("./routes/user");
const cartRouts = require("./routes/cart");

const app = express();
const port = process.env.PORT || 3000;
// require("./db/mongoos");

//Essam
app.use("/Products", ProductsRoutes);
app.use("/Offers", OffersRoutes);
app.use("/Reviews", ReviewsRoutes);

//Marina
app.use("/category", catRoute);
app.use("/payment", paymentRoute);

//magdy
app.use("/copouns", copounsRoutes);

/// Fatma
app.use("/orders", ordersRoutes);
app.use("/users", userRouters);
app.use("/cart", cartRouts);

// app.get("/translate", (req, res) => res.sendFile("Hello World!"));
app.listen(port, () => console.log(` app listening in port ${port}`));
