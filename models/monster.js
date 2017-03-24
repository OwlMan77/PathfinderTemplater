const mongoose = require('mongoose');

const maxNum = 99 ;
const monsterSchema = mongoose.Schema({
      name: { type: String, maxlength: 40, trim: true, required: true},
	    cr: { type: Number, max: maxNum},
	    stats: { str: { type: Number, max: maxNum}, dex: { type: Number, max: maxNum}, con: { type: Number, max: maxNum}, int: { type: Number, max: maxNum}, cha: { type: Number, max: maxNum}, wis: { type: Number, max: maxNum}}
	    armourClass: { total: { type: Number, max: maxNum}, touch: { type: Number, max: maxNum}, flatFooted: { type: Number, max: maxNum}, natural: { type: Number, max: maxNum}},
	    hp: { type: Number, max: maxNum},
	    fort: { type: Number, max: maxNum},
	    ref:  { type: Number, max: maxNum},
	    will: { type: Number, max: maxNum},
	    dr: { damageReduction: { type: Number, max: maxNum}, drPierce:{ type: String, trim:true} },
	    immunities: [{type: String, trim: true}],
	    resistances:[{ resistType: {type: String, trim: true}, resistancePower:{ type: Number, max: maxNum}}],
	    typeOfMonster:{ family: {type: String, trim: true}, species:[{type: String, trim: true}]},
	    weaknesses: [{type: String, trim: true}],
	    spellLikeAbilities:[{  name: {type: Number, max: maxNum}, description: {type: String, trim: true}, uses: { type: Number, max: maxNum}],
	    melee: [{ name: {type: String, trim: true}, noOfDie: {type: Number, max: maxNum}, damageDie: {type: Number, max: maxNum}}],
	    ranged: [{ name: {type: String, trim: true}, noOfDie: {type: Number, max: maxNum}, damageDie: {type: Number, max: maxNum}}],
	    specialAttacks: [{name: {type: String, trim: true}, description: {type: String, trim: true}, noOfDie: {type: Number}, damageDie: {type: Number, max: maxNum}}],
	    specialQuality: [{type: String, trim: true}]
});

module.exports = mongoose.model('Monster', monsterSchema);
