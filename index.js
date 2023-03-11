const express = require("express");
//Essam
var ProductsRoutes = require("./Routes/products")
var OffersRoutes = require("./Routes/offers")
var ReviewsRoutes = require("./Routes/reviews")

const app = express();
const port = process.env.PORT 
require("./db/mongoos");

//Essam
app.use("/Products",ProductsRoutes)
app.use("/Offers",OffersRoutes)
app.use("/Reviews",ReviewsRoutes)

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(` app listening`));
