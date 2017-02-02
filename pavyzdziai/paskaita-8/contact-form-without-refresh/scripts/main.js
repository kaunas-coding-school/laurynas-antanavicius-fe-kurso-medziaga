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
    sendEmail();
  }

  function sendEmail() {
    var url = "http://localhost/send";
    var data = new FormData(contactForm);
    var request = new Request(url, {
      method: "POST",
      body: data
    });
    console.log(request);

    fetch(request)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(json) {
      var message = json;
      console.log(message);
      // if (message.success) {
      //   $("#js-info-message").append( "<p class='success-message'>"+ message.success + "</p>");
      //   $(contactForm).hide();
      // } else {
      // $("#js-info-message").append( "<p class='error-message'>"+ message.error + "</p>");
      // }
    // });
    });
  }

})(jQuery);
