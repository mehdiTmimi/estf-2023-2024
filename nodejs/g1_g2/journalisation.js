const fs = require("fs")
const log = (req)=>{
    let data =  JSON.stringify({
        ip:req.ip,
        path:req.path,
        time: ( new Date()).toString()
    })+"\n"
  
    
    fs.appendFile("./logs.txt",data,()=>{

    })
}
module.exports={
    log
}