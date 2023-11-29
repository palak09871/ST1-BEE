const express=require("express");

const router=express.Router();// fetching router 

const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

// define API routes
router.post("/POST/api/posts", createTodo);  
router.get("/GEt/api/posts",getTodo);
router.get("/GEt/api/posts/:id",getTodoById);
router.put("/PUT/api/posts/:id",updateTodo);
router.delete("/DELETE/api/posts/:id",deleteTodo);
module.exports=router;

