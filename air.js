const express=require('express');
const {hostRouter}=require("./routes/host");
const user=require("./routes/user")
const path=require('path')
 const app=express();
 app.set('view engine','ejs');
 app.set('views','views');

 const rootdir=require('./utils/pathutil')
app.use((req,res,next)=>{
  console.log(req.method,req.url)
  next();
})
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootdir,'public')))
app.use(user);
app.use("/host",hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})
const port = 3001;
app.listen(port, () => {
    console.log(`The HTTP server is running at http://localhost:${port}`);
});