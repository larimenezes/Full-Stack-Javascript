const turista = prompt("Qual é o seu nome?");
let cidades = ""
let contagem = 0

let visitouCidade = prompt("Você visitou alguma cidade? \n(Sim/Não)")

  while (visitouCidade === "Sim") {
    let cidade = prompt("Qual o nome da cidade que visitou?")
    cidades += " - " + cidade + "\n"
    contagem++
    visitouCidade = prompt("Você visitou alguma outra cidade? \n(Sim/Não)")
  }

  alert(
    "Turista: " + turista + 
    "\nQuantidade de cidades visitadas: " + contagem + 
    "\nCidades visitadas:\n" + cidades 
  )

  

  



