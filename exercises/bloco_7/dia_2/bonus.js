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

// const sumStudents = (obj) => {
//   let lessons = Object.keys(obj);
//   sum = 0;
//   for (let index = 0; index < lessons.length; index += 1) {
//     if (obj[lessons[index]].materia === 'Matemática') {
//       sum += obj[lessons[index]].numeroEstudantes
//     }
//   }
//   return sum;
// }

// console.log(sumStudents(allLessons));

//2
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

let createReport = (obj, teacher) => {
  let materias = [];
  let estudantes = 0;
  let lessons = Object.keys(obj);
  for (let index = 0; index < lessons.length; index +=1) {
    if (obj[lessons[index]].professor === teacher) {
      materias.push(obj[lessons[index]].materia);
      estudantes += obj[lessons[index]].numeroEstudantes;
    }
  }
  return {
    professor: teacher,
    aulas: materias,
    estudantes: estudantes,
  };

}

console.log(createReport(allLessons, 'Maria Clara'));