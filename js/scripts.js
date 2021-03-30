(function($) {
  "use strict";

  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function(){
  if ($(this).val() != '') {
    $(this).addClass('notEmpty');
  } else {
    $(this).removeClass('notEmpty');
  }
  });

  /* Contact Form */
  $("#contactForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
          // handle the invalid form...
          cformError();
          csubmitMSG(false, "Please fill all fields!");
      } else {
          // everything looks good!
          event.preventDefault();
          csubmitForm();
      }
  });

  function csubmitForm() {
      // initiate variables with form content
  var name = $("#cname").val();
  var email = $("#cemail").val();
      var message = $("#cmessage").val();
      var terms = $("#cterms").val();
      $.ajax({
          type: "POST",
          url: "php/contactform-process.php",
          data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms,
          success: function(text) {
              if (text == "success") {
                  cformSuccess();
              } else {
                  cformError();
                  csubmitMSG(false, text);
              }
          }
      });
}

  function cformSuccess() {
      $("#contactForm")[0].reset();
      csubmitMSG(true, "Message Submitted!");
      $("input").removeClass('notEmpty'); // resets the field label after submission
      $("textarea").removeClass('notEmpty'); // resets the field label after submission
  }

  function cformError() {
      $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass();
      });
}

  function csubmitMSG(valid, msg) {
      if (valid) {
          var msgClasses = "h3 text-center tada animated";
      } else {
          var msgClasses = "h3 text-center";
      }
      $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


/* Removes Long Focus On Buttons */
$(".button, a, button").mouseup(function() {
  $(this).blur();
});

})(jQuery);