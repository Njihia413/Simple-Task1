const loginForm = document.querySelector("#login-form")
console.log(loginForm)

loginForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit (event) {
    event.preventDefault();
    event.target.reset(); //Reset the form

    // Redirect to the dashboard.html
    window.location.href = "dashboard.html"; 
}

//Success Message Trigger
const successMessage = document.getElementById("successMessage");

const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
    ].join('')
    successMessage.append(wrapper);
}

const successAlertTrigger = document.getElementById("btn-login");
if(successAlertTrigger) {
    successAlertTrigger.addEventListener("click", () => {
        alert("Login Successful 😎.", "success")
    })
}

//Disable and Enable Form Button
const input = document.querySelector(".form-control");
const formBtn = document.getElementById("btn-login");

formBtn.disabled = true;

input.addEventListener("change", changeBtnState);

function changeBtnState() {
    if(document.querySelector(".form-control").value === "") {
        formBtn.disabled = true;
    } else {
        formBtn.disabled = false;
    }
} 


