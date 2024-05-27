// routes/index.js
const express = require('express');
const router = express.Router();
const posthienthilasonamphai = require('../controllers/hienthilasonamphai.Controller')

// Route chính
router.post('/', posthienthilasonamphai); 



module.exports = router;