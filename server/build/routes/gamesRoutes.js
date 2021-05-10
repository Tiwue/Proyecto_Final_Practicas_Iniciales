"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const gamesController_1 = require("../controllers/gamesController");
router.route('/')
    .get(gamesController_1.obtenerJuegos);
router.route('/:id')
    .get(gamesController_1.getOne);
router.route('/')
    .post(gamesController_1.create);
router.route('/:id')
    .put(gamesController_1.update);
router.route('/:id')
    .delete(gamesController_1.eliminar);
exports.default = router;
