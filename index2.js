
function checkLogin(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( username == "admin@xyz.com" && password == "password123"){
        alert ("Login successful");
        window.location = "home.html"; 
    return false;
    }
    else{
        alert("Please try to login again");
    }
}

function welcomeName(){
    var name = username.substr(0, username.indexOf('@')); 
    return name
  }