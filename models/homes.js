const fs=require('fs');
const path=require('path')
const rootdir=require('../utils/pathutil')
const regHomes=[];
module.exports= class homes{
   constructor(name,housename,location,pricePerNight,rating,photoURL){
    this.name=name;
    this.housename=housename;
    this.location=location;
    this.pricePerNight=pricePerNight;
    this.rating=rating;
    this.photoURL=photoURL;
   }
   save(){
    regHomes.push(this);
    const homedata=path.join(rootdir,'data','homes.json');
    fs.writeFile(homedata,JSON.stringify(regHomes),error=>{
      console.log('kya chedha bhonsdiii')
    })
   }
   static fetchall(){
      return regHomes;
   }
}