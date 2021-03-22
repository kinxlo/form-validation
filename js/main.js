const inputsDiv = document.querySelectorAll('.input-container')

// console.log(inputsDiv);

inputsDiv.forEach((div) => {
  let input = div.firstElementChild
  let placeHolder = div.querySelector('span')

  input.addEventListener('focus', () => {
    placeHolder.classList.remove('cc-placeholder');
    placeHolder.classList.add('cc-move-placeholder')
  })

  input.addEventListener("blur", () => {
    placeHolder.classList.add('cc-placeholder')
    placeHolder.classList.remove('cc-move-placeholder')  
  })
})
