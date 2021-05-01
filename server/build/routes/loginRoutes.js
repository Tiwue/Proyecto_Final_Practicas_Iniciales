"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const loginController_1 = require("../controllers/loginController");
router.route('/')
    .get(loginController_1.getLogin)
    .post(loginController_1.validarCredenciales);
exports.default = router;
