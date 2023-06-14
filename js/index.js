(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })();


    var myButton = document.getElementById("btn-login");

    myButton.addEventListener("click", function() {
    // Modify the button's appearance
    myButton.style.backgroundColor = "#102437";
    myButton.style.color = "white";
    myButton.style.fontWeight = "bold";
});
