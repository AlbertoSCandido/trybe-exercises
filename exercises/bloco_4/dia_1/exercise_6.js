let pecaDeXadrez = 'BISPO';
let verificacao =  pecaDeXadrez.toLowerCase();

switch (verificacao) {
    case 'dama':
      console.log('Qualquer direção - quantas casas estiverem disponíveis.');
      break;
    case 'rei':
      console.log('Qualquer direção - 1 casa.');
      break;
    case 'torre':
      console.log('Linha reta (verical e hoizontal) - quantas casa quiser.');
      break;
    case 'bispo':
      console.log('Diagonal - quantas casas quiser.');
      break;
    case 'cavalo':
      console.log('Movimento em L - duas casas a frente ou para trás e uma casa para esquerda ou direita.');
      break;
    case 'peão':
      console,log('Só se movimenta para frente - no primeiro lance de cada peão pode mover uma ou duas casas e demais lances apenas uma casa.')
      break;
}