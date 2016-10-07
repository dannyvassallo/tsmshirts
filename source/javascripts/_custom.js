// iterate through errors and growl them
function toasts(){
  setTimeout(function(){
    $('span.error').each(function(){
      if($(this).html() != ""){
        var errorText = $(this).text();
        Materialize.toast(errorText, 4000, 'red break-word');
      }
    });
  }, 100);
}


$("#shirtform").validate({
  ignore: "",
  focusInvalid: false,
  rules: {
    'entry.920194180': {
      required: true
    },
    'entry.1622627988': {
      required: true
    },
    'entry.380080146': {
      required: true
    }
  },
  messages: {
    'entry.920194180': {
      required: "Please give your full name."
    },
    'entry.1622627988': {
      required: "Please give your shipping address."
    },
    'entry.380080146': {
      required: "Please select a shirt size."
    }
  },
  invalidHandler: function(form, validator) {
    toasts();
  },
  success: "valid",
  submitHandler: function(form) {
    form.submit();
    Materialize.toast("Thanks you! Your order was sent!", 4000, 'green');
    setTimeout(function(){
      $('#shirtform')[0].reset();
    }, 100);
  },
  errorElement : 'span',
  errorPlacement: function (error, element) {
    error.insertAfter($(element).next());
  }
});
