
var firebaseConfig = {
  apiKey: "AIzaSyBGgMHmK5Q2C6A4u7Ff2csNckTJR1R0fEI",
  authDomain: "kwitter-cce2d.firebaseapp.com",
  databaseURL: "https://kwitter-cce2d-default-rtdb.firebaseio.com",
  projectId: "kwitter-cce2d",
  storageBucket: "kwitter-cce2d.appspot.com",
  messagingSenderId: "671418389255",
  appId: "1:671418389255:web:e2759e7f28280fe93d6ba2",
  measurementId: "G-LMDQJ0XW1B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome!"

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}