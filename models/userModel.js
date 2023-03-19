const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt = require("bcrypt")


const userSchema=mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: true
    },
    lastName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        validate: {
            validator: function (v) {
                // return validator.isEmail(v);
                return /^[a-zA-Z]{3,8}(@)(gmail|yahoo|outlook)(.com)$/.test(v);
            },
            message: props => `${props.value} Is Not a Valid Email !`
        },
        required: [true, 'User Email required'],
    },
    password:{
        type:String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phoneNumber:{
        type:Number,
        length:11
    }

    },{timestamps:true}
)

userSchema.pre('save',function(next){
    const salt = bcrypt.genSaltSync(10);
    const  hashedPassword = bcrypt.hashSync(this.password,salt)
    this.password = hashedPassword
    console.log(this)
next();
})

var userModel = mongoose.model("User",userSchema)

module.exports=userModel


