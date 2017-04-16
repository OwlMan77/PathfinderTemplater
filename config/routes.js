const express = require('express');
const router = express.Router();

const monsters = require('../controllers/monsters');
const templates = require('../controllers/templates');

router.route('/api/monsters')
.get(monsters.index)
.post(monsters.create);
router.route('api/monsters/:id')

router.route('/api/templates')
.get(templates.index)
.post(templates.create);
router.route('/api/templates/:id')

module.exports = router;
