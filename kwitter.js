
function addUser() {

  user_names = document.getElementById("user_name").value.trim();
  if (user_names = "") 
  {
alert("Please enter your name")
  }
  else{



  localStorage.setItem("user_name", user_names);
  
    window.location = "kwitter_room.html";
}}

