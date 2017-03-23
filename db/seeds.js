const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.db);

const Monster = require('../models/monster');
const Template = require('../models/monster');

Monster.collection.drop();
Template.collection.drop();
