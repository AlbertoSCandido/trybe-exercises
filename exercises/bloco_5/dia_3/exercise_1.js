// 1
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };

  const daysOfContainer = document.querySelector('#days');

  for (let days in dezDaysList) {
    let daysToAdd = document.createElement('li');
    daysToAdd.innerText = dezDaysList[days];
    console.log(typeof(daysToAdd));
    daysToAdd.className = 'day';

    if (daysToAdd.innerText === '24' || daysToAdd.innerText === '25' || daysToAdd.innerText === '31'){
      daysToAdd.classList.add('holiday');
    } else if (daysToAdd.innerText === '4' || daysToAdd.innerText === '11' || daysToAdd.innerText === '18' || daysToAdd.innerText === '25'){
      daysToAdd.classList.add('friday');
    }
  daysOfContainer.appendChild(daysToAdd);
  }
};

createDaysOfTheWeek();

// 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function newButton(parm1) {
  let holidayButton = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  holidayButton.innerText = parm1;
  holidayButton.id = 'btn-holiday';
  buttonContainer.appendChild(holidayButton);
}

newButton('Feriados');

// 3 

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function clickButton () {
  let button = document.getElementById('btn-holiday');
  button.addEventListener('click', function(){
    let holidays = document.getElementsByClassName('holiday');
    for (let key in holidays) {
      holidays[key].style.backgroundColor = '#D3D3D3';
    }
  })
}

clickButton()
