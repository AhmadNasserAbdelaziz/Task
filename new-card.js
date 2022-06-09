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
  let notesDB = firebase.database();


// Listen to submit button in new-card page
document.getElementById('content-form').addEventListener('submit', submitForm);
   

function submitForm(e){
  e.preventDefault();
  const title = document.getElementById('titleInput').value;
  const description = document.getElementById('descriptionInput').value;
  var dateString = new Date().toLocaleString();
  var date = dateString.slice(0,15) + ' ' + dateString.slice(19,21);


  var database_ref = notesDB.ref();
  
  var note_data = {
    title: title,
    description: description,
    date: date 
  }
  database_ref.child('notes').push(note_data , function(error){
    if(error){
      alert(error);
    }else{
      window.location.href = 'your-cards.html';
    }
  });
  document.getElementById('content-form').reset(); 
}
