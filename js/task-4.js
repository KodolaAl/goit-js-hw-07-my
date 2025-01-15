const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailForm = event.target.elements.email.value;
  const passwordForm = event.target.elements.password.value;
  if (emailForm === "" || passwordForm === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: emailForm,
    password: passwordForm,
      }
      console.log(formData);
      registerForm.reset();
}



