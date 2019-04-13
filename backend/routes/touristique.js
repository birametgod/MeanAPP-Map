const express = require('express');
const router = express.Router();
const touristiqueController = require('../controllers/touristique');

router.get('', touristiqueController.getPointTouristiques);

module.exports = router;
