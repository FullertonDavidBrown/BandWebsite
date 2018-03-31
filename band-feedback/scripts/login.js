var url12 = "http://localhost:2403/user";
// Modal and login trigger button
var modalAll = document.getElementById("modalDisplay");
var modalBox = document.getElementById("modalBox")
var modalBtn = document.getElementById("presentModal");
// Forms
var loginForm = document.getElementById("loginForm");
var signUpForm = document.getElementById("signUpForm");
// Title
var title = document.getElementById("header");
// Fields
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPass");
var bandName = document.getElementById("bandName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPass");
var confirmPassword = document.getElementById("confirmPass");
// Buttons
var signInBtn = document.getElementById("submitSignIn");
var signUpBtn = document.getElementById("submitSignUp");
// Links
var linkToSignUp = document.getElementById("linkToSignUp");
var linkToSignIn = document.getElementById("linkToSignIn");
// Begin hidden
$(modalAll).hide();
$(signUpForm).hide();
// If the button is clicked, show the modal view
$(modalBtn).click(function () {
  $(modalAll).fadeIn();
});
// If the background is clicked, close the modal
$(modalAll).click(function (e){
  if(e.target == modalAll) {
    $(modalAll).fadeOut();
  }
});
// Handles swapping to sign up page
$(linkToSignUp).click(function(){
  // Hide the login form and show the sign up form
  $(loginForm).hide();
  $(signUpForm).fadeIn(500);
  $(modalBox).css("height", 540);
  $(title).text("Sign Up");
// Reset any entries into the login form
  $(signInEmail).val("");
  $(signInPassword).val("");
});
// Handles swapping to sign in page

$(linkToSignIn).click(function(){

  // Hide the sign up form and show the login form

  $(signUpForm).hide();

  $(loginForm).fadeIn(500);

  $(modalBox).css("height", 380);

  $(title).text("Welcome");



  // Reset any entries into the sign up form

  $(bandName).val("")

  $(signUpEmail).val("");

  $(signUpPassword).val("");

  $(confirmPassword).val("");

});





// Handles signing in

$(signInBtn).click(function(){

  // Holds the values of the fields

  let email = $(signInEmail).val();

  let password = $(signInPassword).val();



  // Reset the password value after the click

  $(signInPassword).val("");



  $.get(url12, function(serverResponse) {

    if(serverResponse.length === 0) {

      console.log("Database is empty");

    }

    // Find the matching email address in the db and get corresponding id

    serverResponse.forEach(function(element) {

      if (element.Email == email && element.Password == password) {

        console.log("Found the user.");

        return;

      }



      console.log("Incorrect email or password: " + email);

    });

  });

});





// Handles signing up

$(signUpBtn).click(function(){

  // Holds the values of the fields

  let band = $(bandName).val();

  let email = $(signUpEmail).val();

  let password = $(signUpPassword).val();

  let confirmPass = $(confirmPassword).val();



  // Reset the password value after the click

  $(signUpPassword).val("");

  $(confirmPassword).val("");



  $.get(url12, function(serverResponse) {

    // Prevents adding duplicate entries

    var alreadyInDB = false;



    serverResponse.forEach(function(element) {

      // If there is already an email with specified name, deny post

      if (element.Email == email) {

        console.log("That email address is taken. Try again.");

        alreadyInDB = true;

        return;

      }



      // If there is already a band with specified name, deny post

      if (element.BandName == band) {

        console.log("That band name is taken. Try again.")

        alreadyInDB = true;

        return;

      }

    });



    // Only execute if the entry is not already in the database

    if (!alreadyInDB) {

      $.post(url12, {

          Band: band,

          Email: email,

          Password: password

        },

        function(serverResponse) {

          console.log(serverResponse);

        });



      alreadyInDB = false;

    }

  });

});
