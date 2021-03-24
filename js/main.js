// TERGETED ELEMENTS ===============================
// target the html elements
const form = document.querySelector('form') //the form element
const formSections = form.querySelectorAll('section') //the form sections elements...returns a nodelist
const submitButton = document.querySelector('.submit-btn') //the 'next' button

// FORM VALIDATION =================
//loop through all the sections
formSections.forEach((section) => {
  let placeHolder //declear a variable to hold the placeholder element
  const inputs = section.querySelectorAll('input') //target the input element as a nodelist or collection

  //again, loop through the input collection
  inputs.forEach((input) => {
    //  for each input, listen for the focus event
    input.addEventListener('focus', (event) => {
      //assign the placeholder element to the place holder varable decleared above
      placeHolder = event.target.parentNode.children[1]
      //if the input element has an empty value and has focus
      if (input.value == '') {
        //change the position and color of the placeholder
        placeHolder.className = 'cc-move-placeholder'
        placeHolder.style.color = 'red'
      }
    })

    //  for each input, listen for the blur event
    input.addEventListener('blur', (event) => {
      //assign the placeholder element to the place holder varable decleared above
      placeHolder = event.target.parentNode.children[1]
      //if the input element has an empty value and losses focus
      if (input.value == '') {
        //change the position and color of the placeholder
        placeHolder.className = 'cc-placeholder'
        placeHolder.style.color = 'grey'
      }
    })

    // INPUTS VALIDATION =================
    //for each input again, listen of input change event
    input.addEventListener('input', (event) => {
      //get the input type
      const inputType = event.target
      //get the errormessage element of said input if it has one
      const errorInput = event.target.parentNode.parentNode.children[1]
      placeHolder = event.target.parentNode.children[1] //get the placeholder

      //check the validity of the input
      if (inputType.type == 'text' || inputType.type == 'email') {
        
        if (inputType.validity.valid) {
          //if the input is valid, change the color of the placeholder
          placeHolder.style.color = 'grey'
          errorInput.classList.add('d-none')
          //also if the input type is a password input just return true, there is no error message to display
        } else {
          //also, if the input is not valid change the placeholder color to red
          placeHolder.style.color = 'red'
          showErrorMessage(inputType, errorInput) //and fire the function to show the error message.
        }
      }
    })
  })
})

// ERROR MESSAGE =================
//error message take two aguments, the input element and the error element
const showErrorMessage = (input, error) => {
  //if the input is a textfield
  if (input.type == 'text') {
    //and if the textfield does not have a value
    if (input.validity.valueMissing) {
      //display this error message
      error.textContent = `Please enter a username`
      error.classList.remove('d-none')
    }
  } else if (input.type == 'email') {
    //now, if the input is an emailfield
    if (input.validity.typeMismatch) {
      //and if the emailfield data does not fit an email parttern
      error.textContent = `Please enter a valid email address` //then, display this error message.
      error.classList.remove('d-none')
    }
  }
}

// a funcvtion to show the password value.
const showPassword = () => {
  //get the icon of the input
  const pwdInput = document.getElementById('password')
  const icon = document.querySelector('.fa-eye')
  //listen for a click event
  icon.addEventListener('click', () => {
    let type =
      pwdInput.getAttribute('type') === 'password' ? 'text' : 'password'
    pwdInput.setAttribute('type', type)

    icon.classList.toggle('fa-eye-slash')
  })
}

//here we invoked the password show function.
showPassword()

// ACTIVATE SUBMIT BUTTON ===============

//now we want to activate the button if all the inputs are valid...
//we listen on the form for an input event
form.addEventListener('input', (event) => {
  //target the inputs(username, password and email)
  const userName = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  //if all the inputs are valid
  if (
    userName.validity.valid &&
    email.validity.valid &&
    password.validity.valid
  ) {
    //we then change the state of the submit button.
    submitButton.removeAttribute('disabled')
    submitButton.classList.add('cc-active')
  } else {
    //the submit button state remains the same
    submitButton.addAttribute = 'disabled'
    submitButton.classList.remove('cc-active')
  }
})
