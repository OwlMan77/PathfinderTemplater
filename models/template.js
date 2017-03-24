const mongoose = require('mongoose');
const maxNum = 99;
const templateSchema = mongoose.Schema({
       name: {type: String, trim: true, required: true},
       typeOfMonster: { family: {type: String, trim: true}, species:[{type: String, trim: true}]},
       cr:{ type: Number, max: maxNum},
       stats: { str: { type: Number, max: maxNum}, dex: { type: Number, max: maxNum}, con: { type: Number, max: maxNum}, int: { type: Number, max: maxNum}, cha: { type: Number, max: maxNum}, wis: { type: Number, max: maxNum}},
       acBonus: { type: Number, max: maxNum},
       melee: [{ name: {type: String, trim: true}, noOfDie: {type: Number, max: maxNum}, damageDie: {type: Number, max: maxNum}}],
       ranged: [{ name: {type: String, trim: true}, noOfDie: {type: Number, max: maxNum}, damageDie: {type: Number, max: maxNum}}],
 	     specialAttacks: [{name: {type: String, trim: true}, description: {type: String, trim: true}, noOfDie: {type: Number, max: maxNum}, damageDie: {type: Number, max: maxNum}}],
 	     specialQuality: [{type: String, trim: true}]
   }
);
module.exports = mongoose.model('Template', templateSchema);
