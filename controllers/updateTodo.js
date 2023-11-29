const Todo=require("../models/Todo")


exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title, Content,Author,Tags}=req.body;

        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {title, Content,Author,Tags},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:`data updated successfully`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"there was a server error"
        }) 
    }
}