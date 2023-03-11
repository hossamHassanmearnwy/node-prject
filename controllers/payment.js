
const expressAsyncHandler = require('express-async-handler');
const fs = require('fs');
const slugify = require('slugify');
const payModel=require("../models/payment")




// @desc: get all payment
// @route: GET /payment
// @access: puplic

exports.getPayments = expressAsyncHandler(async(req , res) => {
        const payments = await payModel.find({});
        res.status(200).json({results: payments.length, data: payments})
});


// @desc: GET specific payment
// @route: GET /payment/:id
// @access: puplic


exports.getPayment = expressAsyncHandler(async(req , res) => {
        var {id} = req.params;
        const payment = await payModel.findById(id);
        if(!payment){
                res.status(404 ).json({msg: `no payment for this id ${id}`})
        }
        res.status(200 ).json({data:payment})
});



// @desc: delete specific category
// @route: DELETE /category/:id
// @access: private


exports.deletePayment = expressAsyncHandler(async(req , res) => {
        var {id} = req.params;
        const payment = await payModel.findByIdAndDelete(id);
        if(!payment){
                res.status(404 ).json({msg: `no payment for this id ${id}`})
        }
        res.status(200).json({msg: "this payment is deleted successfully"})
});
// module.exports={createCategory};