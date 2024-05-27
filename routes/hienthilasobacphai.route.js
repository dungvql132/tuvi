// routes/index.js
const express = require('express');
const router = express.Router();
const posthienthilasobacphai = require('../controllers/hienthilasobacphai.Controller')


// Route chính
router.post('/', posthienthilasobacphai)

module.exports = router;