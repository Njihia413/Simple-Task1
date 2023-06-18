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

  // var myButton = document.getElementById("btn-login");

  // myButton.addEventListener("click", function() {
  // // Modify the button's appearance
  // myButton.style.backgroundColor = "#102437";
  // myButton.style.color = "white";
  // myButton.style.fontWeight = "bold";
  // })

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

  Orders.forEach(order => {
    const tr = document.createElement("tr");
    const trContent = ` <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === "Declined" ? "danger" : order.shipping === "Pending" ? "warning" : "primary"}">${order.shipping}</td>
                        <td class="primary">Details</td>
                      `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
  }) 




  




