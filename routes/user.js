
const express=require('express');
const {regHomes}=require('./host')
const userRouter=express.Router();
 userRouter.get("/",(req,res,next)=>{
    res.render('home',{regHomes});
 })
 module.exports=userRouter;