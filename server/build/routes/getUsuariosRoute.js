"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const getUsuariosController_1 = require("../controllers/getUsuariosController");
router.route('/')
    .get(getUsuariosController_1.obtenerUsers);
exports.default = router;
