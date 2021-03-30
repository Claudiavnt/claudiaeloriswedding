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
          csubmitMSG(false, "Riempi tutti i campi prima di inviare!");
      } else {
          // everything looks good!
          event.preventDefault();
          csubmitForm();
      }
  });

  function csubmitForm() {
      // initiate variables with form content
  var name = $("#name_cognome").val();
  var pnumber = $("#numero_persone").val();
      var message = $("#messaggio").val();
      $.ajax({
          type: "POST",
          url: "php/contactform-process.php",
          data: "nome_cognome=" + name + "&numero_persone=" + pnumber + "&messaggio=" + message,
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
      csubmitMSG(true, "Conferma inviata!");
      $("input").removeClass('notEmpty'); // resets the field label after submission
      $("textarea").removeClass('notEmpty'); // resets the field label after submission
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