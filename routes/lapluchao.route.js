// routes/index.js
const express = require('express');
const router = express.Router();
const getlapluchao = require('../controllers/lapluchao.controller');

// Route chính
router.get('/', getlapluchao); 

module.exports = router;
