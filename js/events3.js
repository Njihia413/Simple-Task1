const resetForm = document.querySelector("#reset-form")
console.log(resetForm)

resetForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit (event) {
    event.preventDefault();
    event.target.reset(); //Reset the form
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

const successAlertTrigger = document.getElementById("btn-reset");
if(successAlertTrigger) {
    successAlertTrigger.addEventListener("click", () => {
        alert("A link to reset your password has been sent to your email 😎.", "success")
    })
}

//Disable and Enable Form Button
const input = document.querySelector(".form-control");
const formBtn = document.getElementById("btn-reset");

formBtn.disabled = true;

input.addEventListener("change", changeBtnState);

function changeBtnState() {
    if(document.querySelector(".form-control").value === "") {
        formBtn.disabled = true;
    } else {
        formBtn.disabled = false;
    }
} 


