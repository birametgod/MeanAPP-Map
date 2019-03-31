const express = require("express");
const router = express.Router();
const velovController = require("../controllers/velov");

router.get("", velovController.getVelov);
