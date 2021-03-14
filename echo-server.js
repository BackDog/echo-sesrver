var port = 8080;
var	WebSocketServer = require('ws').Server;
var	wss = new WebSocketServer({ port: port });

var codeSplit = "@#CC@#";

console.log('listening on port: ' + port);

wss.on('connection', function connection(ws) {

	ws.on('message', function(message) {
		console.log('message: ' + message);
		validationCommand(ws, message);
	});

	// console.log('new client connected!');
	ws.send('MASTER' + codeSplit + '');
});


var liveID = [];

function validationCommand(websocket, message) {
	var res = message.split("@#CC@#");
	if (res[0] === 'AUTH') {
		liveID.push({type: res[1], ws: websocket});
		websocket.send('đăng ký ' + res[1] + ' thành công');
	}else if (res[0] === 'MASTER'){
		for (var i = liveID.length - 1; i >= 0; i--) {
			if (liveID[i].type === 'SLAVE') {
				liveID[i].ws.send(message);
			}
		}
	}else if (res[0] === 'SLAVE'){
		for (var i = liveID.length - 1; i >= 0; i--) {
			if (liveID[i].type === 'MASTER') {
				liveID[i].ws.send(message);
			}
		}
	}else{
		websocket.send('echo: ' + message);
	}
	console.log(liveID.length);
}
function chat(data) {
	var idChat = 1;
	var message = data;
}
function get(data) {

}
function ping(data) {

}
function control(data) {

}
function authentication(data) {
	var obj = JSON.parse(data);
	console.log(obj);
}

var users = [
	{username: 'admin', password: 'admin'},
	{username: 'canh', password: '123456'}
];