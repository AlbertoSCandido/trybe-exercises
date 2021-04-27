let allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

// 1
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const sumStudents = (obj) => {
  let lessons = Object.keys(obj);
  sum = 0;
  for (let index = 0; index < lessons.length; index += 1) {
    if (obj[lessons[index]].materia === 'Matemática') {
      sum += obj[lessons[index]].numeroEstudantes
    }
  }
  return sum;
}

console.log(sumStudents(allLessons));