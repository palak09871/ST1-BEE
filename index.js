const express=require("express");

const app=express(); 

/* app.listen(5000,()=>{
    console.log(` app ekdum sahi chl rha h`)
}) */

require("dotenv").config();
const PORT =process.env.PORT || 4000;


app.use(express.json()); 

const todoRoutes=require("./routes/todo");
app.use("/",todoRoutes);
// start server
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

// connect to db
const dbConnect=require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1> this is homepage</h1>`);
})