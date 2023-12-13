const express = require("express")
const PORT = 3000
const app = express()
app.use("/ok",(req,res,next)=>{
    console.log("inside middleware 1");
    if(req.method=="GET")
        res.send("ok")
    else next()
})

app.get("/users",(req,res,next)=>{
    console.log("inside middleware users");
    res.send("list of users")
})
app.use((req,res,next)=>{
    console.log("inside middleware 2");
    res.send("ok2")
})
app.listen(PORT,()=>{
    console.log("server started at ",PORT);
})