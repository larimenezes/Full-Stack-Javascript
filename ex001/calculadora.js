const input1 = prompt("Informe o primeiro número:")
const input2 = prompt("Informe o segundo número:")

const x = parseFloat(input1)
const y = parseFloat(input2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y 

alert(
  "Resultados:\n" +
  "\nSoma: " + sum +
  "\nSubtração: " + subtraction +
  "\nMultiplicação: " + multiplication +
  "\nDivisão: " + division 
)