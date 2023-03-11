const express = require("express");
//Essam
var ProductsRoutes = require("./Routes/products")
var OffersRoutes = require("./Routes/offers")
var ReviewsRoutes = require("./Routes/reviews")
//Marina
var catRoute = require("./Routes/category")
var paymentRoute = require("./Routes/payment")

const app = express();
const port = process.env.PORT 
require("./db/mongoos");

//Essam
app.use("/Products",ProductsRoutes)
app.use("/Offers",OffersRoutes)
app.use("/Reviews",ReviewsRoutes)
//Marina
app.use('/category', catRoute)
app.use('/payment', paymentRoute)

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(` app listening`));
