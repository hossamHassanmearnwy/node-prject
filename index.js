const express = require("express");
//Essam
var ProductsRoutes = require("./Routes/products")
var OffersRoutes = require("./Routes/offers")
var ReviewsRoutes = require("./Routes/reviews")
//Marina
var catRoute = require("./routes/category")
var paymentRoute = require("./routes/payment") 

//////////magdy
const copounsRoutes=require("./routes/copouns")

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

//magdy 
app.use("/copouns",copounsRoutes)

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(` app listening`));
