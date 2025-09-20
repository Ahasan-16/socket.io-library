const express = require('express');
const app = express();
const http=require('http');
const expressServer=http.createServer(app);


const {Server}=require('socket.io');
const io=new Server(expressServer);

io.on('connection', (socket)=>{
    console.log('connection connected');
    socket.on('send-message',(data)=>{
        io.emit('transfer-message',data);
    })


})


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})







expressServer.listen(3000,function(){
    console.log('Express server listening on port 3000');
});
