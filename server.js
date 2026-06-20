const express=require("express");
const app=express();
require("./db");
app.get("/",(req,res)=>{
    res.send("Server Running");
});
app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
});