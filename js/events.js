const registrationForm = document.querySelector("#registration-form")
console.log(registrationForm)
registrationForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit (event) {
    event.preventDefault();
    let newUserObj = {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value

    }
    event.target.reset(); //Reset the form
    console.log(newUserObj);

    // Redirect to the login.html
    window.location.href = "login.html";
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

const successAlertTrigger = document.getElementById("btn-registration");
if(successAlertTrigger) {
    successAlertTrigger.addEventListener("click", () => {
        alert("Account created successfully 😎.", "success")
    })
}

//Disable and Enable Form Button
const input = document.querySelector(".form-control");
const formBtn = document.getElementById("btn-registration");

formBtn.disabled = true;

input.addEventListener("change", changeBtnState);

function changeBtnState() {
    if(document.querySelector(".form-control").value === "") {
        formBtn.disabled = true;
    } else {
        formBtn.disabled = false;
    }
} 


