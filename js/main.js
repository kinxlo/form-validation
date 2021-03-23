// TERGETED ELEMENTS ===============================

const inputsDiv = document.querySelectorAll('.input-container') //collections of inputs field container
const inputs = document.querySelectorAll('input') //collections of inputs
const form = document.querySelector('form')
const email = document.querySelector('#email')
const emailErrorMessage = document.querySelector('.cc-email-error')
const userName = document.querySelector('#name')
const userNameErrorMessage = document.querySelector('.cc-name-error')
const password = document.querySelector('#password')
const submitButton = document.querySelector('.submit-btn')

// ======== ANIMATED PLACEHOLDER =================

// loop through all the input element and perform the logic within
inputsDiv.forEach((div) => {
  // get the first child of the input div element
  let input = div.firstElementChild
  //   get the span element of the input variable (also its first child)
  let placeHolder = div.querySelector('span')

  //   listen for events or actions(focus event)...
  input.addEventListener('focus', () => {
    //on focus remove the css style class "cc-placeholder" and add the "cc-move-placeholder"
    placeHolder.className = 'cc-move-placeholder'
  })

  input.addEventListener('blur', () => {
    //  when the input is out of focus(blur), check if it has an empty value
    if (input.value == '') {
      // if it has empty value, add the css class "cc-placeholder"
      placeHolder.className = 'cc-placeholder'
      placeHolder.style.color = 'grey'
    }
  })
})

//============ FORM VALIDATION ===============

const showErrorMessage = (inputs) => {
  inputs.forEach((input) => {
    if (input.type === 'text') {
      let span = document.querySelector('.text-div')

      span.children[1].style.color = 'grey'
      userNameErrorMessage.classList.remove('d-none')

      if (input.validity.valueMissing) {
        span.children[1].style.color = 'red'
        userNameErrorMessage.textContent = `Please enter a user name`
      }
    } else if (input.type === 'email') {
      let span = document.querySelector('.email-div')

      span.children[1].style.color = 'grey'
      emailErrorMessage.classList.remove('d-none')

      if (input.validity.typeMismatch) {
        span.children[1].style.color = 'red'
        emailErrorMessage.textContent = `Please enter a valid email address`
      }
    }
  })
}

// Username validation=======================
// listen for event or action on the email element
userName.addEventListener('input', (e) => {
  // when a value is typed in the input field, check if it is valid

  if (userName.validity.valid) {
    //remove error message if any
    userNameErrorMessage.classList.add('d-none')
  } else {
    showErrorMessage(inputs)
  }
})

// email validation=======================
// listen for event or action on the email element
email.addEventListener('input', (e) => {
  // when a value is typed in the input field, check if it is valid

  if (email.validity.valid) {
    //remove error message if any
    emailErrorMessage.classList.add('d-none')
  } else {
    showErrorMessage(inputs)
  }
})

// password validation =====================
// listen for event or action on the password element
password.addEventListener('input', (e) => {
  // when a value is typed in the input field, check if it is valid
  let span = document.querySelector('.password-div')
  if (password.validity.valid) {
    //remove error message if any
    span.children[1].style.color = 'grey'
  } else {
    span.children[1].style.color = 'red'
  }
})

// Activate Button =================

inputs.forEach((input) => {
  if (input.validity.valid) {
    submitButton.removeAttribute('disabled')
    submitButton.style.backgroundColor = '#286efa'
    submitButton.style.color = '#fff'
    console.log('all is valid!')
  } else {
    console.log('something is wrong')
  }
})

form.addEventListener('submit', (e) => {
  // if the email field is valid, we let the form submit
  //   e.preventDefault()
  //   inputs.forEach((input) => {
  //     if (input.validity.valid) {
  //       return true
  //     } else {
  //       showErrorMessage(inputs)
  //     }
  //   })
})
