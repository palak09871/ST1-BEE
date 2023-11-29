
const Todo=require("../models/Todo");
// router ke through aye honge controller me, so define route handler
exports.getTodo=async(req,res)=>{
    try{
        // fetch all todo items from database
        const todo=await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todo,
            message:"entire Todo data is fetched"
        });
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


// single fetch by id
// usse phle route create kro id ke liye
exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})

        // given is not found
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data with given id found",
            })
        }
        // id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data fetched successfully`
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