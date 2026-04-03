const express=require('express');
const hostRouter=express.Router();

  hostRouter.get("/host/add-home",(req,res,next)=>{
  res.send(`<form action="/host/add-home" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <br><br>
        <label for="hous-name">house name:</label>
        <input type="text" id="house-name" name="house-name">
        <br><br>
        <button type="submit">Submit</button>
    </form>
    `)
 })
hostRouter.post("/host/add-home",(req,res,next)=>{
    console.log("deatils",req.body);
    const name=req.body.name;
    const housename=req.body['house-name'];
    res.send(`<h1>thank you ${name} for chosing Air-bnb</h1>
        <p>your house ${housename} is our house from now </p>
      <p>WE ARE A FAMILY NOW</p>  `)
 })
 module.exports=hostRouter;