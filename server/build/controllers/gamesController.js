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
exports.eliminar = exports.update = exports.create = exports.getOne = exports.obtenerJuegos = void 0;
const database_1 = require("../database");
function obtenerJuegos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const juegos = yield conn.query('SELECT * from juego');
        return res.json(juegos);
    });
}
exports.obtenerJuegos = obtenerJuegos;
;
function getOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const { id } = req.params;
        const games = yield conn.query('SELECT * FROM juego WHERE idJuego = ?', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    });
}
exports.getOne = getOne;
;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const result = yield conn.query('INSERT INTO juego set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    });
}
exports.create = create;
;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const { id } = req.params;
        const oldGame = req.body;
        yield conn.query('UPDATE juego set ? WHERE idJuego = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    });
}
exports.update = update;
;
function eliminar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const { id } = req.params;
        yield conn.query('DELETE FROM juego WHERE idJuego = ?', [id]);
        res.json({ message: "The game was deleted" });
    });
}
exports.eliminar = eliminar;
;
