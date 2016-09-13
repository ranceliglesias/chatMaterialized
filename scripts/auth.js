const ref = new Firebase("https://chat-app8210.firebaseio.com");
$(document).ready(function(){
  $("button").click(function() {
    const site = this.id;
    ref.authWithOAuthPopup(this.id, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          // console.log("Authenticated: ", authData[site].displayName);
          ref.set({
            "user": {
              'authData': authData[site]}
          });
          window.location.replace("app.html");
        }
      });
    });
  })
