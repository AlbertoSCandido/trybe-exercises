const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.

const dragonDamage = () => {
  let min = 15;
  let dano = Math.ceil(Math.random() * 50);
  return dano >= min ? dano : min;
}

// console.log(dragonDamage());

// Crie uma função que retorna o dano causado pelo warrior .

const warriorDamage = () => {
  let min = warrior.strength;
  let max = warrior.strength * warrior.weaponDmg;
  dano = Math.ceil(Math.random() * max)
  return dano > min ? dano : min
}

// console.log(warriorDamage());

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDamage = () => {
  let dano = Math.ceil(Math.random() * mage.intelligence * 2);
  let mana = mage.mana - 15;
  if (mage.mana < 15) {
    dano = "Não possui mana suficiente"
  }
  return dano > mage.intelligence ? {damage:dano, mana: - 15} : {damage: mage.intelligence, mana: -15};
}

// console.log(mageDamage());


const gameActions = {
  turnWarriorXDragon: (block) => {
    let dano = block();
    warrior.damage = dano;
    dragon.healthPoints -= dano;
  },
  turnMageXDragon: (block) => {
    let dano = block();
    dragon.healthPoints -= dano.damage;
    mage.damage = dano.damage;
    mage.mana = mage.mana;
  },
  turnDragonXMageAndWarrior: (block) => {
    let dano = block();
    mage.healthPoints -= dano;
    warrior.healthPoints -= dano;
    dragon.damage = dano;
  },
  battleMembers: { mage, dragon, warrior },
};

gameActions.turnWarriorXDragon(warriorDamage);
gameActions.turnMageXDragon(mageDamage);
gameActions.turnDragonXMageAndWarrior(dragonDamage)
console.table(gameActions.battleMembers);

