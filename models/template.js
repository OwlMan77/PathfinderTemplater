const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
       name: {type: String, trim: true, required: true},
       typeOfMonster: { family: {type: String, trim: true}, species:[{type: String, trim: true}]},
       cr:{ type: Number},
       stats: { str: { type: Number}, dex: { type: Number}, con: { type: Number}, int: { type: Number}, cha: { type: Number}, wis: { type: Number}},
       acBonus: { type: Number},
       melee: [{ name: {type: String, trim: true}, noOfDie: {type: Number}, damageDie: {type: Number}}],
 	     specialAttacks: [{name: {type: String, trim: true}, description: {type: String, trim: true}, noOfDie: {type: Number}, damageDie: {type: Number}}],
 	     specialQuality: [{type: String, trim: true}]
   }
);
module.exports = mongoose.model('Template', templateSchema);
