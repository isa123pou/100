//TUS ENLACES DE FIREBASE
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
    function send ()
    {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

});
    document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código

//Termina código
      } });  }); }
getData();
