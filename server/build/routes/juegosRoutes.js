"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const juegosController_1 = require("../controllers/juegosController");
router.route('/')
    .get(juegosController_1.getJuegos);
router.route('/')
    .post(juegosController_1.buscarJuego);
exports.default = router;
