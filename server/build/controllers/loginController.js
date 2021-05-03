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
exports.validarCredenciales = exports.getLogin = void 0;
const database_1 = require("../database");
function getLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const usuarios = yield conn.query('SELECT * FROM usuario');
        return res.json(usuarios[1]);
    });
}
exports.getLogin = getLogin;
;
function validarCredenciales(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body;
        console.log(datos.contrasenia);
        console.log(datos.usuario);
        const conn = yield database_1.connect();
        const consulta = yield conn.query('SELECT * FROM usuario WHERE username= ?', [datos.usuario]);
        console.log(consulta);
        console.log([datos.contrasenia]);
        console.log(consulta[0].Contrasenia);
    });
}
exports.validarCredenciales = validarCredenciales;
;
