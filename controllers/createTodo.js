
const Todo=require("../models/Todo")

exports.createTodo=async(req,res)=>{
    try{
        const {title,Content,Author,Tags}=req.body;

        const response=await Todo.create({title ,Content,Author,Tags});

        res.status(200).json({
            success:true,     
            data:response,
            message:"data inserted successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log("there was an error in inserting data",err)
        res.status(500).json({
            success:false,
            message:err.message,
            error:"internal server error"
        })
    }
}
