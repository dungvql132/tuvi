// routes/index.js
const express = require('express');
const router = express.Router();
const getformnhapthongtin = require('../controllers/laplasotuvinamphai.Controller')

// Route chính
router.get('/', getformnhapthongtin); 



module.exports = router;