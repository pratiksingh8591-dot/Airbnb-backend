const express=require('express');
const hostRouter=express.Router();
const path=require('path')
const rootdir=require('../utils/pathutil')

  hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','book.html'))
 })
hostRouter.post("/add-home",(req,res,next)=>{
    console.log("deatils",req.body);
    const name=req.body.name;
    const housename=req.body['house-name'];
    res.send(`<h1>thank you ${name} for chosing Air-bnb</h1>
        <p>your house ${housename} is our house from now </p>
      <p>WE ARE A FAMILY NOW</p>  `)

 })
 module.exports=hostRouter;