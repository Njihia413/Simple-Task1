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


  const sideMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");

  //Show Sidebar
  menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  })

  //Hide Sidebar
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  })

  //Change theme
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  })


var logout = document.getElementById("logout");
logout.addEventListener("click", () => {

  // Redirect to the login.html
  window.location.href = "login.html"; 
})



