const http = require("http")
const { readHtml } = require("./utils")

const server = http.createServer((request,response)=>{
    console.log(request.method)
    response.statusCode=200
    response.statusMessage="OK"
    response.setHeader("Content-Type","text/html")
    response.write(readHtml('index.html'))
    response.end()
})
server.listen(3000)