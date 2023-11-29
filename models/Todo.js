
const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true,
    maxLength:255,
    },
    Content:{
        type:String,
        required:true,
        maxLength:5000,
    },
    Author:{
        type:String,
        required:true,
    },
    Tags:{
        type:String,
        required:true,
        default:Date.now(),
    } 
});

module.exports=mongoose.model("Todo",todoSchema);