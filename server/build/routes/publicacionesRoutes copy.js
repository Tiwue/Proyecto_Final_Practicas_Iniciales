"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const publicacionesController_1 = require("../controllers/publicacionesController");
router.route('/')
    .get(publicacionesController_1.getPosts);
exports.default = router;
