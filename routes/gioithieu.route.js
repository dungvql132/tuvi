// routes/index.js
const express = require('express');
const router = express.Router();
const getGioiThieu = require('../controllers/gioithieu.controller');

// Route chính
router.get('/', getGioiThieu); 

module.exports = router;
