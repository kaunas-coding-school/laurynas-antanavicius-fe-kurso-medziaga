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
    var url = "../send.php";
    var data = new FormData(contactForm);
    var request = new Request(url, {
      method: "POST",
      body: data
    });
    console.log(request);

    fetch(request)
    .then(function(response) {
      return response.blob();
    })
    .then(function(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      reader.addEventListener("loadend", function() {
        // reader.result contains the contents of blob as a typed array
        var message = JSON.parse(reader.result);
        console.log(message);
        if (message.success) {
          $("#js-info-message").append( "<p class='success-message'>"+ message.success + "</p>");
          $(contactForm).hide();
        } else {
        $("#js-info-message").append( "<p class='error-message'>"+ message.error + "</p>");
        }
      });
    });
  }

})(jQuery);
