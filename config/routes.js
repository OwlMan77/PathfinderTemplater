const express = require('express');
const router = express.Router();

const monsters = require('../controllers/monsters');
const templates = require('../controllers/templates');

router.route('/monsters')
router.route('/monsters/:id')

router.route('/templates')
router.route('/templates/:id')

module.exports = router;
