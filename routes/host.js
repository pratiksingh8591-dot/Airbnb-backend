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
    const location=req.body.location;
    const pricePerNight=req.body['price-per-night'];
    const rating=req.body.rating;
    const photoUrls=[req.body['photo-url-1'],req.body['photo-url-2'],req.body['photo-url-3']].filter(Boolean);
  regHomes.push({name,housename,location,pricePerNight,rating,photoUrls});
   res.render('addedhome',{regHomes:regHomes ,content:'thankyou for coming'})

 })
 module.exports={hostRouter,regHomes};