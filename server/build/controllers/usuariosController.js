"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminar = exports.update = exports.create = exports.getOne = exports.obtenerUsuarios = void 0;
const database_1 = require("../database");
function obtenerUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const usuarios = yield conn.query('SELECT * from usuario');
        return res.json(usuarios);
    });
}
exports.obtenerUsuarios = obtenerUsuarios;
;
function getOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const { id } = req.params;
        const usuarios = yield conn.query("SELECT idUsuario, Nombre, Username, Correo, Contrasenia, Biografia, DATE_FORMAT(fecha, '%y/%m/%d') AS Fecha, tipo FROM usuario WHERE idUsuario = ?", [id]);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: "The user doesn't exits" });
    });
}
exports.getOne = getOne;
;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const result = yield conn.query('INSERT INTO usuario set ?', [req.body]);
        res.json({ message: 'User Saved' });
    });
}
exports.create = create;
;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const { id } = req.params;
        const oldUser = req.body;
        yield conn.query('UPDATE usuario set ? WHERE idUsuario = ?', [req.body, id]);
        res.json({ message: "The user was Updated" });
    });
}
exports.update = update;
;
function eliminar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const { id } = req.params;
        yield conn.query('DELETE FROM usuario WHERE idUsuario = ?', [id]);
        res.json({ message: "The user was deleted" });
    });
}
exports.eliminar = eliminar;
;
