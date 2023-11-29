const mongoose=require("mongoose");  // library

require("dotenv").config();
console.log(process.env.DATABASE_URL);
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })  
    
    .then(()=>console.log("database connected!!!"))
    .catch((error)=>{
        console.log("error occured");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect; 