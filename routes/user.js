
const express=require('express');
const {regHomes}=require('../controller/homes')
const userRouter=express.Router();
const controller=require('../controller/homes')
userRouter.get("/",controller.gethome)
 module.exports=userRouter;