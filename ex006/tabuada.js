const tabuada = prompt("Informe um número que você deseja calcular a tabuada")
let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
  resultado += tabuada + " x " + fator + " = " + (tabuada * fator) + "\n"
} 

alert("Resultado da tabuada de " + tabuada + ":\n\n" + resultado)