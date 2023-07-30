const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur)
function onBlur(evt) {
    
    if (evt.currentTarget.value.trim().length === Number(input.dataset.length)) {
       input.classList.add('valid');
        input.classList.remove('invalid');
 

    } else {
        input.classList.add('invalid');
        input.classList.remove('valid')
    }
    console.log(evt.currentTarget.value);
}
    