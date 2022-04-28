const firebaseConfig = {
    apiKey: "AIzaSyBP2qImxxv5y9R7026K7shz44-tgHcQvEI",
    authDomain: "notesapptask-48f42.firebaseapp.com",
    databaseURL: "https://notesapptask-48f42-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notesapptask-48f42",
    storageBucket: "notesapptask-48f42.appspot.com",
    messagingSenderId: "635778090412",
    appId: "1:635778090412:web:5a043b2dac0ff1bb3c6609",
    measurementId: "G-NKPZ6QJHKF"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

function getdata()
{ 
  var container = '' ;
  var database_ref = firebase.database().ref('notes');
  database_ref.once("value", function(snapshot) {
    var data = snapshot.val();
        for (let i in data )
    {
       container += `<div class="note">
       <div class="text">
         <p class="title-note">${data[i].title}</p>
         <p class="desc">${data[i].description}</p>
         <button onclick=deleteItem('${i}') class="delete"></img></button>
         <p class='date'>${data[i].date}</p>

     </div>
     </div>`
    }
    document.getElementById('board').innerHTML = container;
    
}
  );
}


  function deleteItem(i){
   firebase.database().ref('/notes').child(i).remove();
    getdata();

  }
