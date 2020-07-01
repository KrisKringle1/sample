function addDiv() {
  const div = document.createElement('div'
  )
  const childElement = document.createTextNode('hello there ')

  div.appendChild(childElement);

  const body = document.querySelector('body')

  body.appendChild(div)
}


const button = document.querySelector('button')

button.addEventListener('click', addDiv)
