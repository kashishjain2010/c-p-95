var firebaseConfig = {
      apiKey: "AIzaSyDXxeJySMAZWi-6I0nXswc_S08su_zl6bA",
      authDomain: "kwitter-6bc64.firebaseapp.com",
      databaseURL: "https://kwitter-6bc64-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bc64",
      storageBucket: "kwitter-6bc64.appspot.com",
      messagingSenderId: "530406043420",
      appId: "1:530406043420:web:298348ba8d7875731ad4d9",
      measurementId: "G-SEWYHK5VEJ"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name +"!";


function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}