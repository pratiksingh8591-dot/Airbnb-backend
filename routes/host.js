const express=require('express');
const hostRouter=express.Router();
const path=require('path')
const rootdir=require('../utils/pathutil')

 const add=require('../controller/homes')

  hostRouter.get("/add-home",add.getAddhome)
hostRouter.post("/add-home",add.postaddhome)
  
 module.exports={hostRouter};