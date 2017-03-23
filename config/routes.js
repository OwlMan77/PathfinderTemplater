const express = require('express');
const router = express.Router();

const monsters = require('../controllers/monsters');
const templates = require('../controllers/templates');

router.route('/monsters')
.get(monsters.index)
router.route('/monsters/:id')

router.route('/templates')
.get(templates.index)
router.route('/templates/:id')

module.exports = router;
