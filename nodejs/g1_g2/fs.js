const fsModule =require("fs")
const teste = (data)=>{
    fsModule.writeFile("data.txt",data,()=>{
        console.log("done writing");
    })
}
console.log("111111");
module.exports.f1 = teste
module.exports.PI = 3.14