const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.db);

const Monster = require('../models/monster');
const Template = require('../models/monster');

Monster.collection.drop();
Template.collection.drop();

const monsters = [
  {
    name: 'Goblin' ,
    cr: 0.33,
    stats: { str: 11, dex: 15, con: 12, int: 10, cha: 6 , wis: 9},
    armourClass: { total: 16, touch: 13, flatFooted: 14, natural: 0},
    hp: 6,
    fort: 3,
    ref:  2,
    will: 1,
    dr: {},
    immunities: [],
    resistances:[],
    typeOfMonster: {family: 'humanoid', species:['goblinoid']},
    weaknesses: [],
    spellLikeAbilities:[],
    melee: [{ name: 'shortsword', noOfDie: 1, damageDie: 4}],
    specialAttacks: [],
    specialQuality: []
  },
  {
    name: 'Kobold' ,
    cr: 0.33,
    stats: { str: 11, dex: 15, con: 12, int: 10, cha: 6 , wis: 9},
    armourClass: { total: 16, touch: 13, flatFooted: 14, natural: 0},
    hp: 5,
    fort: 3,
    ref:  2,
    will: 1,
    dr: { damageReduction: 0, drPierce: '' },
    immunities: [],
    resistances:[],
    typeOfMonster: {family: 'humanoid', species:['reptilian']},
    weaknesses: ['light sensitivity'],
    spellLikeAbilities:[],
    melee: [{ name: 'spear', noOfDie: 1, damageDie: 6}],
    ranged: [{ name: 'sling', noOfDie: 1, damageDie: 6}],
    specialAttacks: [],
    specialQuality: []
  }
];
monsters.forEach(monster => Monster.create(monster, (err, monster) => console.log(`${ monster.name } was saved.`)));
