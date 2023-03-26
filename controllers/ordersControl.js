const orderModel = require("../models/orderModel")






// add new order
async function addOrder(req, res) {
    try {
        const newOrder = await orderModel.create(req.body);
        res.status(200).json(newOrder);
    } catch (err) {
        res.status(422).json("order information is invalid");
    }
}





// update order by id 
async function updateOrder(req, res) {
    var id = req.params.id;
    const newData = req.body;
    try{
        const updatedOrder = await orderModel.findByIdAndUpdate(id, { $set: newData })
        res.status(200).json({ status: "order updated successfully", updatedOrder });

    }catch(err){
        res.status(500).json(err.message);
    }
}







// get by id
async function getByID(req, res) {
    try {
        const orderId = req.params.id;
        const found = await orderModel.findById(orderId);
        if (found.userId == req.userId) {
            res.status(200).json(found);
        } else {
            res.status(422).json("this order not belong to you");
        }
    } catch (err) {
        res.status(422).json(err);
    }
}





//get all orders
async function getAllOrders(req, res) {

    try {
        const allOrders = await orderModel.find({}).populate({ path: "userId", select: "firstName ,email" }).populate("products.productId");

        const finalResult = allOrders.map((item) => {
            const prods = item.products.map((p) => {
                return {
                    productId: {
                        //EXAMPLE................................
                        _id: p.productId._id,
                        itemName: p.productId.ItemName,
                        images: p.productId.Images,
                        brand: p.productId.Brand,
                        color: p.productId.Color,
                        price: p.productId.Price,
                        //................................
                    },
                    quantity: p.quantity,
                };
            });

            return {
                _id: item._id,
                userId: item.userId,
                address: item.address,
                mobile: item.mobile,
                products: prods,
                // total: item.total,
                // state: item.state,
                // createdAt: item.createdAt,
            };
        });

        res.status(200).json(finalResult);
    } catch (err) {
        res.status(500).json(err.message);
    }
}





// delete by id
async function deleteById(req, res) {
    try {
        const orderId = req.params.id;
        const found = await orderModel.findById(orderId);
        if (found.userId == req.userData.userId) {
            const deleteOrder = await orderModel.findByIdAndDelete(orderId);
            res.status(200).json("your order has been deleted");
        } else {
            res.status(422).json("this order not belong to you");
        }
    } catch (err) {
        res.status(422).json(err);
    }
}







module.exports = { addOrder, getByID, deleteById, getAllOrders }
