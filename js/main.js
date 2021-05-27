const themes = {
  1: './css/theme-1.css',
  2: './css/theme-2.css',
  3: './css/theme-3.css'
}

const changeTheme = () => {
  let slider = document.querySelector('#theme').value
  let css = document.querySelector('#themecss').href = themes[slider]
}

document.querySelector('#result-number').addEventListener('click', () => {
  let valueInput = document.querySelector('#result-number').value
  if (valueInput == 0) {
    document.querySelector('#result-number').value = ''
  }
})

/* RESET */
document.querySelector('#reset').addEventListener('click', function() {
  document.querySelector('#result-number').value = ''
})

/* DEL */
document.querySelector('#del').addEventListener('click', () => {
  let del = document.querySelector('#result-number').value.toString().slice(0, -1)
  document.querySelector('#result-number').value = del
})

const numbers = (num) => {
  let textarea = document.querySelector('#result-number')
  textarea.value += num.toString()
}

document.querySelector('#result').addEventListener('click', () => {
  let add = document.querySelector('#result-number').value
  let symbol = ''
  let position = ''
  for (let i = 0; i < add.length; i++) {
    if (/[-+/x]/.test(add.toString().charAt(i))) {
      position = i
      symbol = add.toString().charAt(i)
    }
  }

  let a = parseFloat(add.substring(0, position))
  position++
  let b = parseFloat(add.substring(position, add.length))

  switch (symbol) {
    case '+':
      document.querySelector('#result-number').value = parseFloat(a+b)
      break;
    case '-':
      document.querySelector('#result-number').value = parseFloat(a-b)
      break;
    case '/':
      document.querySelector('#result-number').value = parseFloat(a/b)
      break;
    case 'x':
      document.querySelector('#result-number').value = parseFloat(a*b)
      break;
  }

})
