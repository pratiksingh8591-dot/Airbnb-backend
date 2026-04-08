const express=require('express');
const hostRouter=express.Router();
const path=require('path')
const rootdir=require('../utils/pathutil')
const regHomes=[];

  hostRouter.get("/add-home",(req,res,next)=>{
  res.render('book',{content:"best homes around"})
 })
hostRouter.post("/add-home",(req,res,next)=>{
    console.log("deatils",req.body);
    const name=req.body.name;
    const housename=req.body['house-name'];
  regHomes.push({name,housename});
   res.render('addedhome',{regHomes:regHomes ,content:'thankyou for coming'})

 })
 module.exports={hostRouter,regHomes};