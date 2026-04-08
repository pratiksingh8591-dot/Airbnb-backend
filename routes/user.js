
const express=require('express');
const {regHomes}=require('./host')
const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
console.log(regHomes);
res.render('home',{regHomes:regHomes , content:'welcome to AIR_bNB'})
})
 module.exports=userRouter;