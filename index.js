const express=require('express');
const app=express();
const http=require('http');
const expressServer=http.createServer(app);


//socket je bhabe configure korbo
const {Server}=require('socket.io');
//Ei kane Server ekta class er object toiri korbo,bitore expressServer ta pass korabo
const io=new Server(expressServer);

//socket tik tak kaj korche ki na tar jonno connection test korte pari

io.on('connection', (socket)=>{
    console.log('connection connected');
    setTimeout(()=>{
        socket.send("i am data,from server side !");
    },5000);
})




app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})



expressServer.listen(3000,function(){
    console.log("Server started on port 3000");
});