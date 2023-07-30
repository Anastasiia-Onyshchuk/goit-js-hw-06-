const correctEmail = '';
const correctPassword = '';
const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    const emailValue = evt.currentTarget.elements.email.value;
    const passwordValue = evt.currentTarget.elements.password.value;
    if (emailValue !== correctEmail && passwordValue !== correctPassword) {
        const formData = {
        emailValue,
        passwordValue,
        }
        console.log(formData);
        evt.currentTarget.reset();

    } else {
         alert("Please fill in all the fields!");
    }
};