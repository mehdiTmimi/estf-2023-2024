const express = require("express")
const server = express();
server.get("/",(req,res)=>{
    console.log("get path : /");
    res.setHeader("Content-type","application/xml")
    res.send('<h1 style="color:blue">salut</h1>')
})
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