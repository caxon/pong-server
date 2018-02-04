var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8100;

<<<<<<< HEAD
var p1 = {
  pos : [0,0,0]
}
var p2 = {
  pos : [10, 10, 10]
}
var ball ={
  pos : [5, 5, 5],
  vel : [0, 1, 0]
}
=======
var message = "";
var array = {x : "2", y : "5", z : "3" };
>>>>>>> parent of 9edb786... .

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', onConnection);

function onConnection(socket){
  console.log("person has connected");
  socket.on('update1', (data) =>{
    p1.pos = data;
  })
  socket.on('update2', (data) =>{
    p2.pos = data;
  })
  socket.on('updateBall', (data) =>{
    ball.pos = data.pos;
    ball.vel = data.vel;
  })
  socket.on('marco', ()=>{
    console.log('polo')
    socket.emit('polo', "echo");
  })
  socket.on('getp1', (data) =>{
    socket.emit('sendp1', p1)
  });

  socket.on('getp2', (data) =>{
    socket.emit('sendp2', p2)
  });

  socket.on('getball', (data) =>{
    socket.emit('sendball', ball)
  });
}

http.listen(port, function(){
  console.log('listening on *:8100');
});

async function loop( ms , dostuff){
  var endloop = false;
  while (!endloop){
    await sleep(2000);
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
