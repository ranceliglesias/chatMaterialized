// Definir mi referencia de conexion a mi Aplicacion en Firebase
var ref = new Firebase('https://chat-app8210.firebaseio.com/');
ref.child('user/authData').on('value', function(snapshot){
  // console.log(snapshot.val())
  const user = snapshot.val();
  // $('#messagesDiv').text(user.displayName);
});
function displayUser(displayName, img) {
  $('#username').text(user.displayName)
};

// Recibir la entrada de los mensajes
$('#messageInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var message = $('#messageInput').val();
    ref.child('user/messages').push({message});
    $('#messageInput').val('');
  }
});

// Obtener datos sobre mi Firebase
ref.child('user/messages').on('child_added', function(snapshot){
  const msj = snapshot.val();
  ref.child('user/authData').on('value', function(snapshot){
    auth = snapshot.val();
  })

  displayChatMessage(auth.profileImageURL, auth.displayName, msj.message);
})

function displayChatMessage(img, name, msj) {
  $('<div/>').html('<img src='+ img +'>' + msj).appendTo($('#messagesDiv'))
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
