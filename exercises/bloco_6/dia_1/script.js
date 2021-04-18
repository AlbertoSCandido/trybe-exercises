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

function createStates() {
  for (let index in statsList){
    let newOption = document.createElement('option');
    // newOption.value = index;
    newOption.innerText = statsList[index];
    states.appendChild(newOption);
  }
}

createStates()

// 2 Validação da data

let dateField = document.querySelector('#date-beginning');

function validateDate() {
  let date = dateField.value.split('/');
  let day = date[0];
  let month = date[1];
  let year = date[2];
  if (day < 1 || day > 31) {
    alert('Dia invádido - colocar data no formato dd/mm/yy');
    dateField.value = '';
    return true;
  } else if (month < 1 || month > 12) {
    alert('Mês inválido - colocar data no formato dd/mm/yy');
    dateField.value = '';
    return true;
  } else if (year < 1900 || year > 2021) {
    alert('Ano inválido - colocar data no formato dd/mm/yy');
    dateField.value = '';
    return true;
  }
  return false;
}

// 3 

let form = document.querySelector('#formulario');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateDate === false) {
    let newDiv = document.createElement('div');
    let newInputs = document.querySelectorAll('input');
    let newLabels = document.querySelectorAll('label');
    for (let index = 0; index < newInputs.length; index +=1) {
      console.log(newInputs[index].value);
      let values = newInputs[index].value;
      newDiv.innerText += `${values}
      `;
      document.body.appendChild(newDiv);
    }
  }
})



