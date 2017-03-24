module.exports = {
  index: monsterIndex
  create: monsterCreate
}

const Monster = require('../models/monster');

//will show all monsters unless there is an error, if there is an error it will display the error message
function monsterIndex(req, res){
  Monster.find((err, monsters)=> {
    if(err) return res.status(500).json({message:'Something went wrong displaying monsterIndex.'});
    return res.status(200).json(monsters);
  });
}

function monsterCreate(req, res){
  const monster = new Monster(req.body);
  monster.save((err, monster) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with monsterCreate.' });
    return res.status(201).json(user);
  });
}
