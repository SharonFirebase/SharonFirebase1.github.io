  // Initialize Firebase
  var config3 = {
    apiKey: "AIzaSyAAieYro-Ne4s5dhJLYdQdAc8c1pEcywiQ",
    authDomain: "initialintakeform-c8d85.firebaseapp.com",
    databaseURL: "https://initialintakeform-c8d85.firebaseio.com",
    projectId: "initialintakeform-c8d85",
    storageBucket: "initialintakeform-c8d85.appspot.com",
    messagingSenderId: "783269733167"
  };
  firebase.initializeApp(config3);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var dateOfBirth = getInputVal('dateOfBirth');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var state = getInputVal('state');

  // Save message
  saveMessage(name, dateOfBirth, email, phone, state);

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

  
  
// Save message to firebase
function saveMessage(name, dateOfBirth, email, phone, state){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    state:state,
    dateOfBirth:dateOfBirth,
    email:email,
    phone:phone
    
  }); 
}
