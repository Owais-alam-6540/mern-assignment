let mongo = require("mongoose");

let user_col=mongo.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },

})
module.exports=mongo.model("assignment",user_col);