const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const maxNum = 99 ;
const monsterSchema = mongoose.Schema({
      name: { type: String, maxlength: 40, trim: true, required: true},
	    cr: { type: Number},
	    stats: { str: { type: Number}, dex: { type: Number}, con: { type: Number}, int: { type: Number}, cha: { type: Number}, wis: { type: Number}},
	    armourClass: { total: { type: Number}, touch: {type: Number}, flatFooted: {type: Number}, natural: { type: Number}},
	    hp: { type: Number},
	    fort: { type: Number},
	    ref:  { type: Number},
	    will: { type: Number},
	    dr: { damageReduction: { type: Number}, drPierce:{ type: String, trim:true} },
	    immunities: [{type: String, trim: true}],
	    resistances:[{ resistType: {type: String, trim: true}, resistancePower:{ type: Number}}],
	    typeOfMonster:{ family: {type: String, trim: true}, species:[{type: String, trim: true}]},
	    weaknesses: [{type: String, trim: true}],
	    spellLikeAbilities:[{  name: {type: Number}, description: {type: String, trim: true}, uses: { type: Number} }],
	    melee: [{ name: {type: String, trim: true}, noOfDie: {type: Number}, damageDie: {type: Number}}],
	    ranged: [{ name: {type: String, trim: true}, noOfDie: {type: Number}, damageDie: {type: Number}}],
	    specialAttacks: [{name: {type: String, trim: true}, description: {type: String, trim: true}, noOfDie: {type: Number}, damageDie: {type: Number}}],
	    specialQuality: [{type: String, trim: true}]
});

module.exports = mongoose.model('Monster', monsterSchema);
