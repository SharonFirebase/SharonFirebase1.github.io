//  var config = {
    //apiKey: "AIzaSyDug0uDsPaUVx3TFGTZbEyTCKDBrEWCW7U",
    //authDomain: "signin-5d65e.firebaseapp.com",
    //databaseURL: "https://signin-5d65e.firebaseio.com",
    //projectId: "signin-5d65e",
    //storageBucket: "signin-5d65e.appspot.com",
    //messagingSenderId: "575856858282"
 // };
 // firebase.initializeApp(config);

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
  var email1 = getInputVal('email1');
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
    email1:email1,
    phone:phone
    
  }); 
}
