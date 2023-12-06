const fs = require("fs")
let somme = (a,b)=>a+b
let fact = nbr =>{
    let n = 1;
    for(let i=2;i<=nbr;i++)
        n*=i
    return n
}
const readHtml = (path)=>fs.readFileSync(path).toString()
module.exports={somme,fact,readHtml}