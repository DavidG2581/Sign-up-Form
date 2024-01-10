const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const inputs  = document.querySelectorAll('input');
const email = document.querySelector('#email');

const pass1 = document.getElementById('password');
const pass2 = document.getElementById('confirmPassword');

form.noValidate = true;
//turns off HTML validate messages. Need to set them in JS instead

// inputs.addEventListener(oninput,(e)=>{e.target.setCustomValidity('eseg')})

form.addEventListener('submit', validateForm);

// validate form on submission
function validateForm(e) {
    const form1 = e.target;
    const password1 = pass1.value;
    const password2 = pass2.value; 
    console.log(form1);

  
    if (form1.checkValidity()) {
      
      // form is valid - make further checks
      console.log('Form is valid', form1.checkValidity());
      if (password1==password2){
        console.log('passwords match',password1,"and",password2);
        pass2.setCustomValidity('');
      }else {
        console.log('passwords do not match - if statement');
        pass2.setCustomValidity('Passwords must match');
      }
  
    }
    else {
  
      // form is invalid - cancel submit
        console.log('Form is not valid');
        form1.reportValidity();
        //messages work when reportValidty() is there.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity

        //input will always be invalid unless customValidity message is blank
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity
        const validityState = email.validity;
        if (validityState.typeMismatch){
          email.setCustomValidity('put in an email dude');
        } else if(!validityState.typeMismatch){
          //console.log('problem fixed')
          email.setCustomValidity('');
        }    
        console.log('password==password2',(password1==password2),password1,password2);
        if (password1==password2){
          console.log('passwords match',password1,"and",password2);
          pass2.setCustomValidity('');
        }else {
          console.log('passwords do not match - else statement');
          pass2.setCustomValidity('Passwords must match');
        }    


      // use Constraint Validation API to make custom error messages. These cannot be styled with CSS
      // email.addEventListener("input", (event) => {
      //   if (email.validity.typeMismatch) {
      //     email.setCustomValidity("I am expecting an email address!");
      //   } else {
      //     email.setCustomValidity("");
      //   }
      // });


      e.preventDefault();
  
    }
  
  };
  
// submit.addEventListener('click', ()=>{
//     console.log('submit button clicked');
//     console.log(firstName.value);
//     console.log(form)
//     form.reset();

// })