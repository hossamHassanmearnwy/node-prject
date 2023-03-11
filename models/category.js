const mongoose = require('mongoose');



var catSchema = mongoose.Schema({
    catName:{
        type:String,
        required:[true, 'Category required'],
        unique:[true, 'Category must be unique'],
        minLength:5,
        maxLength:20,
    },

    // A and B => shopping.com/a-and-b
    slug:{
        type:String,
        lowercase: true,
    },
    image:{
        type:String,
    },
    // userId:{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref:"User"
    // }
},{timestamps:true})


var catModel= mongoose.model("categories", catSchema) // collection name
module.exports= catModel;