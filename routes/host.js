const express=require('express');
const hostRouter=express.Router();
const path=require('path')
const rootdir=require('../utils/pathutil')
const regHomes=[];

  hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views','book.html'))
 })
hostRouter.post("/add-home",(req,res,next)=>{
    console.log("deatils",req.body);
    const name=req.body.name;
    const housename=req.body['house-name'];
  regHomes.push({name,housename});
  res.redirect('/');

 })
 module.exports={hostRouter,regHomes};