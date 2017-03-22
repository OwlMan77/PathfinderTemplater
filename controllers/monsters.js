module.exports = {
  index: monsterIndex
}

const Monster = require('../model/monster');

function monsterIndex(req, res){
  Monster.find(err, monsters)=> {
    if(err) return res.status(500).json({message:'Something went wrong displaying monsterIndex.'});
    return res.status(200).json(monsters);
  }
}
