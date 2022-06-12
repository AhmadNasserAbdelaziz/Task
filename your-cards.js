const firebaseConfig = {
  apiKey: "AIzaSyBwwrOF9CAxZVgS_gyg1DoGVraMBJ5LcxU",
  authDomain: "notesapp-9d7ec.firebaseapp.com",
  databaseURL: "https://notesapp-9d7ec-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notesapp-9d7ec",
  storageBucket: "notesapp-9d7ec.appspot.com",
  messagingSenderId: "150499457124",
  appId: "1:150499457124:web:40ab65cda6c785beb64771",
  measurementId: "G-VE6PEBEYPV"
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
      console.log(data[i]);
       container += `<div id=${data[i].date} class="note">
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
