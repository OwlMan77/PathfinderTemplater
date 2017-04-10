module.exports = {
  index: monsterIndex,
  create: monsterCreate,
  show: monsterShow,
  update: monsterUpdate,
  delete: monsterDelete
}

const Monster = require('../models/monster');

//will show all monsters unless there is an error, if there is an error it will display the error message
function monsterIndex(req, res){
  Monster.find((err, monsters)=> {
    if(err) return res.status(500).json({message:'Something went wrong displaying monsterIndex.'});
    return res.status(200).json(monsters);
  });
}
//will save a new template unless there is an error
function monsterCreate(req, res){
  const monster = new Monster(req.body);
  monster.save((err, monster) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with monsterCreate.' });
    return res.status(201).json(user);
  });
}
//will show template by id
function monsterShow(req, res) {
  Monster.findById(req.params.id, (err, monster) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong getting that monster.' });
    if (!character) return res.status(404).json({ message: 'No Monster by that name lives here. '});
    return res.status(200).json(character);
  });
}
//will update by id
function monsterUpdate(req, res) {
  Monster.findByIdAndUpdate(req.params.id, req.body, (err, monster) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong changing that monster.' });
    if (!character) return res.status(404).json({ message: 'No Monster by that name lives here. '});
    return res.status(200).json(character);
  });
}
//will delete by id 
function monsterDelete(req, res) {
  Monster.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ messsage: 'killing this beast is harder than that.' });
    return res.sendStatus(204);
  });
}
