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
    daysToAdd.className = 'day';

    if (daysToAdd.innerText === '24' || daysToAdd.innerText === '25' || daysToAdd.innerText === '31'){
      daysToAdd.classList.add('holiday');
    } 
    if (daysToAdd.innerText === '4' || daysToAdd.innerText === '11' || daysToAdd.innerText === '18' || daysToAdd.innerText === '25'){
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


function holidayButton() {
  let button = document.querySelector('#btn-holiday');
  let holidays = document.getElementsByClassName('holiday');
  button.addEventListener('click', function(){
    if (holidays[0].style.backgroundColor === 'white') {
      for (let index = 0; index < holidays.length; index += 1) {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
    } else {
      for (let secondIndex = 0; secondIndex < holidays.length; secondIndex += 1) {
        holidays[secondIndex].style.backgroundColor = 'white';
      }
    }
  })
}

holidayButton();

// 4 :
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


function newButton2(parm1) {
  let fridayButton = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  fridayButton.innerText = parm1;
  fridayButton.id = 'btn-friday';
  buttonContainer.appendChild(fridayButton);
}

newButton2('Sexta-feira');

// 5 
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const buttonFriday = document.getElementById('btn-friday');
const friday = document.querySelectorAll('.friday');
const secondFriday = [4, 11, 18, 25];

function fridayButton(){
buttonFriday.addEventListener('click', function(){
  for(index = 0; index < friday.length; index += 1) {
    if (friday[index].innerText === 'Sextou') {
      friday[index].innerText = secondFriday[index];
    } else {
      friday[index].innerText = 'Sextou';
    }
  }
})
}

fridayButton();

// 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

const daysList = document.querySelectorAll('.day');

function createZoom() {
for (index = 0; index < daysList.length; index += 1) {
  daysList[index].addEventListener('mouseenter', function(event){
    event.target.classList.add('zoom');
  })
  daysList[index].addEventListener('mouseleave', function(event){
    event.target.classList.remove('zoom');
  })
}
}

createZoom()


// 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .


function addTask() {
  let buttonTask = document.getElementById('btn-add');
  buttonTask.addEventListener('click', function(){
  let inputBox = document.getElementById('task-input').value;
  let newTask = document.createElement('span');
  newTask.style.display = 'block';
  newTask.innerText = ` ${inputBox}`;
  document.querySelector('.my-tasks').appendChild(newTask); 
  })
}

addTask()




