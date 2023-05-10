const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}
  //com o -1 ele vai pegar a última letra da palavra que a pessoa digitar, não o tamanho

if (palavra === palavraInvertida) {
  alert(palavra + " é um Políndromo!")
} else {
  alert(
    palavra + " não é um Políndromo!\n\n" +
    palavra + " !== " + palavraInvertida
  )
}