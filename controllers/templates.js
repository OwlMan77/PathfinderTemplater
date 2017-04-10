module.exports = {
index: templateIndex,
create: templateCreate,
show: templateShow,
update: templateUpdate,
delete: templateDelete
}

const Template = require('../models/template')

//will show all templates unless there is an error, if there is an error it will display the error message
function templateIndex(req, res){
  Template.find((err, templates) => {
    if(err) res.status(500).json({message: 'Something went wrong with templateIndex'})
    return res.status(200).json(templates);
  });
}

//will save a new template unless there is an error
function templateCreate(req, res){
  const template = new Template(req.body);
  template.save((err, user) => {
    if (err) res.status(500).json({message: 'Something went wrong with templateCreate'});
    return res.status(201).json(template);
  });
}
//will show template by id
function templateShow(req, res) {
  Template.findById(req.params.id, (err, template) => {
    if (err) return res.status(500).json({ messsage: 'Something wrong retrieving that spell.' });
    if (!template) return res.status(404).json({ message: 'No spell by that name resides here. '});
    return res.status(200).json(template);
  });
}

//will update by id
function templateUpdate(req, res) {
  Template.findByIdAndUpdate(req.params.id, req.body, (err, template) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong with altering that spell.' });
    if (!template) return res.status(404).json({ message: 'That spell cannot be altered.'});
    return res.status(200).json(template);
  });
}

//will delete by id 
function templateDelete(req, res) {
  Monster.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ messsage: 'This magic cannot be dispelled.' });
    return res.sendStatus(204);
  });
}
