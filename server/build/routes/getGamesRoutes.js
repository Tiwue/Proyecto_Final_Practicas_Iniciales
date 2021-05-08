"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const getJuegosController_1 = require("../controllers/getJuegosController");
router.route('/')
    .get(getJuegosController_1.obtenerJuegos);
exports.default = router;
