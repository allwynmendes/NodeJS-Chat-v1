var socket = io();
function submitfunction(){
	var from = $('#user').val();
	var message = $('#m').val();
	if(message != ''){
		socket.emit('chatMessage', from, message);
	}
}