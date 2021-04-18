let paragraph = document.querySelector('#teste');
paragraph.style.color = localStorage.getItem('textColor');
paragraph.style.backgroundColor = localStorage.getItem('backgroundColor');
paragraph.style.fontSize = localStorage.getItem('fontSizeText');
paragraph.style.lineHeight = localStorage.getItem('lineHeight');
paragraph.style.fontFamily = localStorage.getItem('fontFamily');

function changeTextColor() {
  let color = document.getElementById('textColor');
  let textP = document.querySelector('#teste');
  color.addEventListener('change', () => {
    textP.style.color = color.value.toString();
    localStorage.setItem('textColor', `${color.value}`);
  })
}

changeTextColor();

function changeBackground() {
  let color = document.getElementById('backgroundColor');
  let textP = document.querySelector('#teste');
  color.addEventListener('change', () => {
    textP.style.backgroundColor = color.value.toString();
    localStorage.setItem('backgroundColor', `${color.value}`);
  })
}

changeBackground();


function changeFontSize() {
  let size = document.getElementById('fontSizeText');
  let textP = document.querySelector('#teste');
  size.addEventListener('change', () => {
    textP.style.fontSize = `${size.value}px`;
    localStorage.setItem('fontSizeText', `${size.value}px`);
  })
}

changeFontSize()

function changelineHeight() {
  let weightP = document.getElementById('lineHeight');
  let textP = document.querySelector('#teste');
  weightP.addEventListener('change', () => {
    textP.style.lineHeight = `${weightP.value}px`
    localStorage.setItem('lineHeight', `${weightP.value}px`);
  })
}

changelineHeight()

function changeFontFamily() {
  let fontFamily = document.getElementById('fontFam');
  let textP = document.querySelector('#teste');
  fontFamily.addEventListener('change', () => {
    let saveFamily;
    if (fontFamily.value === 'timesNewRoman'){
      textP.style.fontFamily = 'Times New Roman, Times, serif';
      saveFamily = 'Times New Roman, Times, serif';
    } else if (fontFamily.value === 'arial'){
      textP.style.fontFamily = 'Arial, Helvetica, sans-serif';
      saveFamily = 'Arial, Helvetica, sans-serif';
    } else if (fontFamily.value === 'impact') {
      textP.style.fontFamily = 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif';
      saveFamily = 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif';
    }
    localStorage.setItem('fontFamily', `${saveFamily}`);
  })
}

changeFontFamily()