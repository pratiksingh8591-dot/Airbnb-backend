
const Homes=require('../models/homes')

const getAddhome=(req,res,next)=>{
  res.render('book',{content:"best homes around"})
 }

const postaddhome=(req,res,next)=>{
    console.log("deatils",req.body);
  const home= new Homes(
    req.body.name,
    req.body['house-name'] || req.body.housename,
    req.body.location,
    req.body['price-per-night'] || req.body.pricePerNight,
    req.body.rating,
    req.body['photo-url-1'] || req.body.photoURL
  )
   home.save();
  const registeredHomes = Homes.fetchall();
    res.render('addedhome',{regHomes:registeredHomes ,content:'thankyou for coming'})
  }
  const gethome=(req,res,next)=>{
    const RegisteredHomes=Homes.fetchall();
console.log(RegisteredHomes);
res.render('home',{regHomes:RegisteredHomes , content:'welcome to AIR_bNB'})
}

module.exports={getAddhome,postaddhome,gethome}
  