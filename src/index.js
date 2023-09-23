const express = require('express'); //fake database
let books = [];
const app=express();
app.get("/", (req, res) => { res.send("Olá");
})
app.listen(8081,()=> console.log("Server rodando"));