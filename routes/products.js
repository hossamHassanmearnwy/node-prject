const express = require("express");
const multer = require("multer");

var {
  createProduct,
  updateProductById,
  getAll,
  gettAllById,
  deleteProductById,
  gettAllByCat,
  gettAllByOffer,
  gettAllByReview,
} = require("../Controllers/products");
var router = express.Router();

//get all
router.get("/", async (req, res, next) => {
  try {
    var Products = await getAll();
    res.status(200).json(Products);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//get all limits
// router.get("/",async (req, res, next) => {
//     var limit = parseInt(req.query.limit) || 10
//     var skip = parseInt(req.query.skip)     || 0
//     try{
//         var Products=  await getAll(limit,skip)
//         res.status(200).json(Products)
//     }catch(err){
//         res.json({message:err.message})
//     }

// })

//get by id
router.get("/:id", async (req, res, next) => {
  var { id } = req.params;
  try {
    var Products = await gettAllById(id);
    res.status(200).json(Products);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//prod count
// router.get("/count", async (req, res, next) => {
//     var { id } = req.params
//     try{
//         var Products=  await gettAllById(id)
//         res.status(200).json(Products)
//     }catch(err){
//         res.json({message:err.message})
//     }
// })

//get by cat
router.get("/Categories/:id", async (req, res, next) => {
  var { id } = req.params;
  try {
    var Products = await gettAllByCat(id);
    res.status(200).json(Products);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//get prod by offer
router.get("/Offers/:id", async (req, res, next) => {
  var { id } = req.params;
  try {
    var Products = await gettAllByOffer(id);
    res.status(200).json(Products);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// get prod by review
router.get("/Reviews/:id", async (req, res, next) => {
  var { id } = req.params;
  try {
    var Products = await gettAllByReview(id);
    res.status(200).json(Products);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//update
router.patch("/:id", async (req, res, next) => {
    var id = req.params.id
    var product=[req.body] //add status //{title:[]=[]}
  try {
    //    var updtaedProdutcs=  await updateProductById(id,product)
    var updtaedProdutcs = await updateProductById(id, product);

    res.json(updtaedProdutcs);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//delete
router.delete("/:id", async (req, res, next) => {
  var id = req.params.id;
  var deleteProduct = await deleteProductById(id);
  res.json(deleteProduct);
});

//add create
router.post("/", async (req, res, next) => {
  var product = req.body;
  // todo.userId =req.userId
  var savedProduct = await createProduct(product);

  res.status(201).json(savedProduct); // created
  // } catch (err) {
  //     res.json({message:err.message})

  //   }
});

const uploads = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/)) {
      cb(new Error("Please upload image"));
    }
    cb(null, true);
  },
});

router.post("/", uploads.single("avatar"), async (req, res) => {
  try {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
