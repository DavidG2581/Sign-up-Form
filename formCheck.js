const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const form = document.getElementById('form');
const submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
    console.log('submit button clicked');
    console.log(firstName.value);
    console.log(form)
    form.reset();

})