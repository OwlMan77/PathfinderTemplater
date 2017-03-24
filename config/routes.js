const express = require('express');
const router = express.Router();

const monsters = require('../controllers/monsters');
const templates = require('../controllers/templates');

router.route('/monsters')
.get(monsters.index)
.post(monsters.create);
router.route('/monsters/:id')

router.route('/templates')
.get(templates.index)
.post(templates.create);
router.route('/templates/:id')

module.exports = router;
