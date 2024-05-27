// routes/index.js
const express = require('express');
const router = express.Router();
const getlaptutru = require('../controllers/laptutru.controller');

// Route chính
router.get('/', getlaptutru); 

module.exports = router;
