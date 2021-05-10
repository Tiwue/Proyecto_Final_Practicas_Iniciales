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
        const conn = yield database_1.connect();
        if (datos.usuario != '' && datos.contrasenia != '') {
            const consulta = yield conn.query('SELECT * FROM usuario WHERE username= ?', [datos.usuario]);
            try {
                if (consulta[0].Contrasenia == datos.contrasenia) {
                    const consulta2 = yield conn.query('INSERT into sesion (idUsuario, Username, Tipo) VALUES (?,?,?)', [consulta[0].idUsuario, consulta[0].Username, consulta[0].tipo]);
                    res.json({ acceso: true, mensaje: "Bienvenido" });
                }
                else {
                    console.log("credenciales no validas");
                    res.json({ acceso: false, mensaje: "Credenciales no validas" });
                }
            }
            catch (error) {
                console.log("Usuario no registrado");
                res.json({ acceso: false, mensaje: "Usuario no registrado" });
            }
        }
        else {
            console.log("Debe llenar todos los campos");
            res.json({ acceso: false, mensaje: "Debe llenar todos los campos" });
        }
    });
}
exports.validarCredenciales = validarCredenciales;
;
