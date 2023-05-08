let dinheiroDisponivel = prompt("Qual é a quantidade de dinheiro disponível?")
dinheiroDisponivel = parseFloat(dinheiroDisponivel)
let opcao = ""

do {
  opcao = prompt(
  "Saldo disponível: R$ " + dinheiroDisponivel +
  "\n1.Adicionar dinheiro" +
  "\n2.Remover dinheiro" +
  "\n3.Sair"
  )

  switch (opcao) {
    case "1":
      dinheiroDisponivel += parseFloat( prompt("Informe o valor a ser adicionado:") )
      break
    case "2": 
      dinheiroDisponivel -= prompt("Informe o valor a ser retirado:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida!")
    }
} while (opcao !== "3")

