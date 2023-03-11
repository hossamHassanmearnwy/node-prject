const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



var paySchema = mongoose.Schema({
    name:{
        type:String,
        minLength:5,
        required:true,
        unique:true,
    },
    paymentResult:{
        status:{type:String},
        update_time: {type:String},
        email_address: {type:String},
    },
    shippingAddress:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalcode:{type:String,required:true},
        country:{type:String,required:true}
    },
    paymentMethod:{
        type:String,
        required:true,
        enum:['paypal','credit-card','debit-card','net-banking']
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date,
    },
    isDeliverd:{
        type:Boolean,
        required:true,
        default:false
    },
    deliveredAt:{
        type:Date,
    },
},{timestamps:true})



// userSchema.pre('save',function(next){
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(this.password, salt);
//     this.password = hashedPassword
//     next()
// })
var payModel= mongoose.model("Payment", paySchema) // collection name
module.exports= payModel