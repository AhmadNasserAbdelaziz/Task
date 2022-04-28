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
  let notesDB = firebase.database();


// Listen to submit button in new-card page
document.getElementById('content-form').addEventListener('submit', submitForm);
   

function submitForm(e){
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
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
