const express = require("express")
const fs = require("fs");
const { log } = require("./journalisation");
const PORT = 3000
const app = express()
app.use((req,res,next)=>{
    log(req)
})
app.use((req,res,next)=>{
    res.setHeader("author","mehdi tmimi")
    let login = req.header("login")
    let pwd = req.header("pwd")
    if(login=="admin" && pwd =="estf")
        next()
    else
        res.status(403).send("error authentification")
});

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/users",(req,res)=>{
    res.send("list of users")
})
app.listen(PORT,()=>{
    console.log("server started at " , PORT);
})