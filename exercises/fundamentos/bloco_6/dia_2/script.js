let states = document.querySelector('#brasil-states');
let statsList = {
  sl: 'Selecione seu estado',
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

// var picker = new Pikaday({ field: document.getElementById('datepicker') });


var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD/MM/YYYY',
});

validation.init("#formulario", {
  events: ["change", "paste", "keyup"]
});
