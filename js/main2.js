// TERGETED ELEMENTS ===============================
const form = document.querySelector('form')
const formSections = form.querySelectorAll('section')
const submitButton = document.querySelector('.submit-btn')

// FORM VALIDATION =================
formSections.forEach((section) => {
  let placeHolder
  const inputs = section.querySelectorAll('input')

  inputs.forEach((input) => {
    //   on focus
    input.addEventListener('focus', (event) => {
      placeHolder = event.target.parentNode.children[1]
      placeHolder.className = 'cc-move-placeholder'
      placeHolder.style.color = 'red'
    })

    // on blur
    input.addEventListener('blur', (event) => {
      placeHolder = event.target.parentNode.children[1]
      if (input.value == '') {
        placeHolder.className = 'cc-placeholder'
        placeHolder.style.color = 'grey'
      }
    })

    // INPUTS VALIDATION =================
    input.addEventListener('input', (event) => {
      const inputType = event.target
      const errorInput = event.target.parentNode.parentNode.children[1]
      placeHolder = event.target.parentNode.children[1]

      if (inputType.validity.valid) {
        placeHolder.style.color = 'grey'
        if (inputType.type == 'password') {
          return true
        } else {
          errorInput.classList.add('d-none')
        }
      } else {
        placeHolder.style.color = 'red'
        showErrorMessage(inputType, errorInput)
      }
    })
  })
})

// ERROR MESSAGE =================
const showErrorMessage = (input, error) => {
  if (input.type === 'text') {
    if (input.validity.valueMissing) {
      error.textContent = `Please enter a username`
      error.classList.remove('d-none')
    }
  } else if (input.type === 'email') {
    if (input.validity.typeMismatch) {
      error.textContent = `Please enter a valid email address`
      error.classList.remove('d-none')
    }
  }
}

// ACTIVATE SUBMIT BUTTON ===============
form.addEventListener('change', (event) => {
  const userName = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  if (
    userName.validity.valid &&
    email.validity.valid &&
    password.validity.valid
  ) {
      console.log("success!")
    submitButton.removeAttribute('disabled')
    submitButton.classList.add('cc-active')
  }
})
