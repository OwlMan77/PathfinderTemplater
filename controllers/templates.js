module.exports = {
index: templateIndex
create: templateCreate
}

const Template = require('../models/templates')

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
  template.save((err. user) => {
    if (err) res.status(500).json({message: 'Something went wrong with templateCreate'});
    return res.status(201).json(template);
  });
}
