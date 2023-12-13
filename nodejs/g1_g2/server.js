const express = require("express")
const fs = require("fs")
const server = express();
server.use(express.static('site')); // servir des fichiers statiques
server.use("/home",(req,res,next)=>{ // intercepter une requete http (get , /)
    if(req.method=="GET")
    {
    let ch = '<h1 style="color:blue"> salut </h1>'
    res.status(200).send(ch)
    }
    next()
})

server.get("/users",(req,res,next)=>{ // intercepter une requete http (get , /)
    console.log(1);
    next()
    console.log(3);
    res.send("ok 111")
})
server.get("/users",(req,res)=>{ // intercepter une requete http (get , /)
    console.log(2);
    res.send("ok")
})



server.use("/**",(req,res)=>{
    res.status(404).send("sm7lna")
})
/*server.get("/index.php",(req,res)=>{ // intercepter une requete http (get , /)
    fs.readFile("./site/home.html",(error,data)=>{
        if(!error)
            {
                res.setHeader("Content-Type","text/html")
                return res.status(200).send(data.toString())
            }
        res.status(500).send("on s'excuse")
    })
})
server.get("/css/main.css",(req,res)=>{
    fs.readFile("./site/css/main.css",(error,data)=>{
        if(!error)
        {
            res.setHeader("Content-Type","text/css")
            return res.status(200).send(data.toString())
        }
    res.status(500).send("on s'excuse")
})})*/
server.listen(3000,()=>{
    console.log("server started at port 3000");
})


/*const http = require("http")

const server = http.createServer((request,response)=>{
    console.log(request.socket.remoteAddress)
    response.statusCode=404
    response.statusMessage="mehdi"
    response.write("desole !")
    response.end();
})
server.listen(3000)*/