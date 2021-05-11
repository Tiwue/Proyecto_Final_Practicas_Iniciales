"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const publicacionesController_1 = require("../controllers/publicacionesController");
router.route('/')
    .get(publicacionesController_1.getPosts);
router.route('/')
    .post(publicacionesController_1.getPublicacion);
router.route('/:id')
    .get(publicacionesController_1.getOne);
exports.default = router;
