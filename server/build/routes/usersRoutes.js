"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const usuariosController_1 = require("../controllers/usuariosController");
router.route('/')
    .get(usuariosController_1.obtenerUsuarios);
router.route('/:id')
    .get(usuariosController_1.getOne);
router.route('/')
    .post(usuariosController_1.create);
router.route('/:id')
    .put(usuariosController_1.update);
router.route('/:id')
    .delete(usuariosController_1.eliminar);
exports.default = router;
