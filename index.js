const inputBox = document.getElementById('input-Box')

document.getElementById('clear').addEventListener('click', () => inputBox.value = '' )
document.getElementById('mc').addEventListener('click', () => inputBox.value.slice(0,-1))
document.getElementById('percentage').addEventListener('click', () => inputBox.value += '%')
document.getElementById('divide').addEventListener('click', () => inputBox.value += '/')
document.getElementById('seven').addEventListener('click', () => inputBox.value += '7')
document.getElementById('eight').addEventListener('click', () => inputBox.value += '8')
document.getElementById('nine').addEventListener('click', () => inputBox.value += '9')
document.getElementById('multiply').addEventListener('click', () => inputBox.value += '*')
document.getElementById('four').addEventListener('click', () => inputBox.value += '4')
document.getElementById('five').addEventListener('click', () => inputBox.value += '5')
document.getElementById('six').addEventListener('click', () => inputBox.value += '6')
document.getElementById('subtract').addEventListener('click', () => inputBox.value += '-')
document.getElementById('one').addEventListener('click', () => inputBox.value += '1')
document.getElementById('two').addEventListener('click', () => inputBox.value += '2')
document.getElementById('three').addEventListener('click', () => inputBox.value += '3')
document.getElementById('addition').addEventListener('click', () => inputBox.value += '+')
document.getElementById('zero').addEventListener('click', () => inputBox.value += '0')
document.getElementById('dot').addEventListener('click', () => inputBox.value += '.')
document.getElementById('openBracket').addEventListener('click', () => inputBox.value += '(')
document.getElementById('closeBracket').addEventListener('click', () => inputBox.value += ')')
document.getElementById('equalto').addEventListener('click', () => inputBox.value = eval(inputBox.value))


