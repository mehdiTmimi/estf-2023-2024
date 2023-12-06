const dns = require("dns")
dns.lookup("facebook.com",(err,address)=>{
    console.log(err);
    console.log(address);
})