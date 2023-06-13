function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id 
  input.value = value
  input.name = name
  input.type = text
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev) {
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex,  null, 'techName')
  
  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1' // toda essa linha é o ID
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp' + rowIndex, 'radio') //techExp é o name e tem que ser iguais.
  const expLabel1 = createLabel('0-2 anos', id1) // a data 0-2 anos é o value
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp' + rowIndex, 'radio') //'radio' é o type
  const expLabel2 = createLabel('3-4 anos', id2)
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })

  rowIndex.append(
    techNameInput, techNameLabel, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
  )

  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelector('.inputRow')

  let technologies = []
  inputRows.ForEach(function (row) {
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value //pq ele quer o input de uma linha específica.
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = ''
  inputRows.ForEach(function (row) {
    row.remove()
  })

  console.log(developers)
})

