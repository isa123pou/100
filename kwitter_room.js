const firebaseConfig = {
      apiKey: "AIzaSyDAM-277YHrfvlb8AOpK4lXXIfQsxuYdJ0",
      authDomain: "tarea100-901df.firebaseapp.com",
      databaseURL: "https://tarea100-901df-default-rtdb.firebaseio.com",
      projectId: "tarea100-901df",
      storageBucket: "tarea100-901df.appspot.com",
      messagingSenderId: "976088111900",
      appId: "1:976088111900:web:1e10e22a3cee957048f8d9"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
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
    window.location = "index.html";
}

