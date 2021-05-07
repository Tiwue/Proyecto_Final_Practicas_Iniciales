"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const getSesionController_1 = require("../controllers/getSesionController");
router.route('/')
    .get(getSesionController_1.obtenerSesion);
exports.default = router;
