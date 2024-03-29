// routes/tokenRoutes.js
const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/signoutController');

router.delete('/', tokenController.deleteToken);

module.exports = router;
