const express=require('express');
const host=require("./routes/host");
const user=require("./routes/user")

 const app=express();
app.use((req,res,next)=>{
  console.log(req.method,req.url)
  next();
})

app.use(express.urlencoded({ extended: false }));
app.use(user);
app.use(host);

const port = 3001;
app.listen(port, () => {
    console.log(`The HTTP server is running at http://localhost:${port}`);
});