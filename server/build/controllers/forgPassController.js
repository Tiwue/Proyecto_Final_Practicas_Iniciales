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
exports.cambiarContraseña = exports.recuperarContraseña = void 0;
const database_1 = require("../database");
function recuperarContraseña(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body;
        console.log(datos.Username);
        const conn = yield database_1.connect();
        if (datos.Username != "" && datos.Correo != "") {
            const consulta = yield conn.query('SELECT * FROM usuario WHERE username= ?', [datos.Username]);
            try {
                if (consulta[0].Username == datos.Username && consulta[0].Correo == datos.Correo) {
                    res.json({ acceso: true, mensaje: 'valido' });
                }
                else {
                    res.json({ acceso: false, mensaje: 'Los datos no coinciden, intente nuevamente' });
                }
            }
            catch (error) {
                console.log("Usuairo no registrado");
                res.json({ acceso: false, mensaje: "Usuario no registrado" });
            }
        }
        else {
            console.log("Debe llenar todos los campos");
            res.json({ acceso: false, mensaje: "Debe llenar todos los campos" });
        }
    });
}
exports.recuperarContraseña = recuperarContraseña;
;
function cambiarContraseña(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body;
        console.log(datos.Username);
        console.log(datos.Contrasenia);
        const conn = yield database_1.connect();
        if (datos.Username != "" && datos.Contrasenia != "") {
            const consulta = yield conn.query('UPDATE usuario SET Contrasenia= ? WHERE username= ?', [datos.Contrasenia, datos.Username]);
            res.json({ acceso: true, mensaje: "Contraseña Actualizada" });
        }
        else {
            console.log("Debe llenar todos los campos");
            res.json({ acceso: false, mensaje: "Debe llenar todos los campos" });
        }
    });
}
exports.cambiarContraseña = cambiarContraseña;
;
