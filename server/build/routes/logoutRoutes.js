"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const logoutController_1 = require("../controllers/logoutController");
router.route('/')
    .get(logoutController_1.cerrarSesion);
exports.default = router;
