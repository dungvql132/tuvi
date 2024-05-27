// routes/index.js
const express = require('express');
const router = express.Router();
const getIndex = require('../controllers/indexController');

// Route chính
router.get('/', getIndex); 

module.exports = router;
