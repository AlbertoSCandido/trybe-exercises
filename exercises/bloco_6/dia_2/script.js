let states = document.querySelector('#brasil-states');
let statsList = {
  ac: 'Acre',
  al: 'Alagoas',
  ap: 'Amapá',
  am: 'Amazonas',
  ba: 'Bahia',
  ce: 'Ceará',
  df: 'Distrito Federal',
  es: 'Espírito Santo',
  go: 'Goiás',
  ma: 'Maranhão',
  mt: 'Mato Grosso',
  ms: 'Mato Grosso do Sul',
  mg: 'Minas Gerais',
  pa: 'Pará',
  pb: 'Paraíba',
  pr: 'Paraná',
  pe: 'Pernambuco',
  pi: 'Piauí',
  rr: 'Roraima',
  ro: 'Rondônia',
  rj: 'Rio de Janeiro',
  rn: 'Rio Grande do Norte',
  rs: 'Rio Grande do Sul',
  sc: 'Santa Catarina',
  sp: 'São Paulo',
  se: 'Sergipe',
  to: 'Tocantins',
}
Object.keys(statsList)

function createStates() {
  for (let index in statsList){
    let newOption = document.createElement('option');
    newOption.value = index;
    newOption.innerText = statsList[index];
    states.appendChild(newOption);
  }
}

createStates()

// 2 Validação da data

let dateField = document.querySelector('#date-beginning');

function validateDate() {
  let date = dateField.split(' / ');
  console.log(date);
}

validateDate()

// 3

// let submitButton = document.querySelector('#submit-button');
// let formulario = document.querySelector('#formulario');

// submitButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   let newDiv = document.createElement('div');
//   newDiv.innerText = formulario.innerText;
//   document.body.appendChild(newDiv);
// })


