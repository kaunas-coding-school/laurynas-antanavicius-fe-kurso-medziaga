(function($) {
'use strict';

  var contactForm = document.querySelector("#js-form");
  // var firstName = document.querySelector("#js-firstname");
  var testCase = {
    firstName: "Laurynas",
    lastName: "A",
    email: "laurynas@kaunascoding.lt"
  };
  contactForm.firstname.value = testCase.firstName;
  contactForm.lastname.value = testCase.lastName;
  contactForm.email.value = testCase.email;

  console.log(contactForm.email.value);

  var errorMessage = document.querySelector("#js-error");

  contactForm.addEventListener("submit", validateInput);

  function validateInput(event) {
    event.preventDefault();
    if (contactForm.email.value === "") {
      var message = document.createElement("p");
      message.textContent = "Please enter your email address";
      $(message).addClass("error-message");
      contactForm.appendChild(message);
      return;
    }
    $(contactForm).hide();
    $("#js-info-message").append( "<p class='success-message'>Thank you for your registration</p>" );
  }

})(jQuery);
