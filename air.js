const express=require('express');
const {hostRouter}=require("./routes/host");
const user=require("./routes/user")
const path=require('path')
const controller=require('./controller/errorcontroller')
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
app.use(controller.error)
const port = 3001;
app.listen(port, () => {
    console.log(`The HTTP server is running at http://localhost:${port}`);
});