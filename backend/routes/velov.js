const express = require('express');
const router = express.Router();
const velovController = require('../controllers/velov');

router.get('', velovController.getVelov);
router.get('/coordinates', velovController.getVelovCoord);

module.exports = router;
