const nomeDoPrimeiro = prompt("Informe o nome do primeiro veículo:")
const nomeDoSegundo = prompt("Informe o nome do segundo veículo:")
const veloDoPrimeiro = prompt("Informe a velocidade do primeiro veículo:")
const veloDoSegundo = prompt("Informe a velocidade do segundo veículo:")

if (veloDoPrimeiro > veloDoSegundo) {
  alert(nomeDoPrimeiro + " " + "é o veículo mais rápido!")
} else if (veloDoPrimeiro < veloDoSegundo) {
  alert(nomeDoSegundo + " " + "é o veículo mais rápido!")
} else {
  alert(nomeDoPrimeiro + " " "e" " " + nomeDoSegundo + " " + "têm a mesma velocidade!" )
}