var ip = document.querySelector('#ip').value;
var port = document.querySelector('#port').value;
var url = ['http://', ip, ':', port].join('');
var socket = io.connect(url);

socket.on('fire', function(){
  alert('fire');
})