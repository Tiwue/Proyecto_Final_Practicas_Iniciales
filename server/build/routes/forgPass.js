"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const forgPassController_1 = require("../controllers/forgPassController");
router.route('/')
    .post(forgPassController_1.recuperarContrase├▒a);
exports.default = router;
