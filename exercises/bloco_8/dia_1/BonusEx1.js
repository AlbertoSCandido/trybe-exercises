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

console.log(dragonDamage());

// Crie uma função que retorna o dano causado pelo warrior .

const warriorDamage = () => {
  let min = warrior.strength;
  let max = warrior.strength * warrior.weaponDmg;
  dano = Math.ceil(Math.random() * max)
  return dano > min ? dano : min
}

console.log(warriorDamage());