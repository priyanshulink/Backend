const express = require('express');
const app = express();

//router
app.get('/',(req, res)=>{
    res.send("Hello world");
})

//start server
app.listen(3000,()=>{
    console.log("server start at port no. 3000");
    
})