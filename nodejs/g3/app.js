const express = require("express");
const fs = require("fs");
const { readHtml } = require("./utils");
const PORT = 3000;
const app = express();

app.use(express.static("./site"))
app.get("/index.html",(req,res)=>{
    res.send("oooook")
})
app.use((req, res, next) => {
  res.setHeader("author", "mehdi tmimi");
  next();
});
app.use((req, res, next) => {
  let ip = req.ip;
  let method = req.method;
  let path = req.path;
  let time = new Date().toString();
  fs.appendFile(
    "logs.txt",
    JSON.stringify({ ip, method, path, time }) + "\n",
    () => {}
  );
  next();
});
app.use((req, res, next) => {
    next()
  let login = req.header("login");
  let pwd = req.header("pwd");
  if (login == "admin" && pwd == "mehdi") return next();
  res.status(403).send("vous devez se connecter");
});
app.get("/users", (req, res) => {
  let users = [
    { nom: "tmimi", prenom: "mehdi" },
    { nom: "alaoui", prenom: "kenza" },
  ];
  res.send("users")
});
/*app.get("/mehdi.php", (req, res) => {
  res.send(readHtml("site/index.html"));
});
app.get("/css/main.css", (req, res) => {
    res.setHeader("Content-Type","text/css")
  res.send(readHtml("site/css/main.css"));
});*/
app.use((req, res, next) => {
  res.status(404).send("sorry");
});
app.listen(PORT, () => {
  console.log("server started at ", PORT);
});
