const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200);
    res.send("healthy");
});

app.listen(3000,()=>{
    console.log("App escuchando en el puerto 3000");
});