const express=require('express');
const app=express();
const http=require('http');
const expressServer=http.createServer(app);


//socket je bhabe configure korbo
const {Server}=require('socket.io');
//Ei kane Server ekta class er object toiri korbo,bitore expressServer ta pass korabo
const io=new Server(expressServer);

//ei ekta namespace
let buyNsp=io.of("/buyNsp");
buyNsp.on('connection',(socket)=>{
    buyNsp.emit('myEvent',"hello buy");
});
//ei arekta namespace
let sellNsp=io.of("/sellNsp");
sellNsp.on('connection',(socket)=>{
    sellNsp.emit('myEvent',"hello sell");
});






app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})



expressServer.listen(3000,function(){
    console.log("Server started on port 3000");
});