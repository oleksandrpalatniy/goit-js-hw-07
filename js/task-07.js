const validInput = document.getElementById('font-size-control')

const text = document.getElementById('text')
text.style.fontSize = '50px'

validInput.addEventListener('input', (e) => {
   text.style.fontSize = `${e.target.value}px`

})
