"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const registroController_1 = require("../controllers/registroController");
router.route('/')
    .post(registroController_1.registrarUsuario);
exports.default = router;
