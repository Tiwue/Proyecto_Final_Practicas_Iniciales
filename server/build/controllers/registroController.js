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
exports.registrarUsuario = void 0;
const database_1 = require("../database");
function registrarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body;
        const conn = yield database_1.connect();
        console.log(datos.Nombre);
        console.log(datos.Username);
        console.log(datos.Contrasenia);
        console.log(datos.Correo);
        console.log(datos.Fecha);
        if (datos.Username != "" && datos.Contrasenia != "" && datos.Nombre != "" && datos.Fecha != "" && datos.Correo != "" && datos.Biografia != "") {
            const consulta = yield conn.query('SELECT * FROM usuario WHERE username= ?', [datos.Username]);
            try {
                if (consulta[0].Username == datos.Username) {
                    res.json({ acceso: false, mensaje: "Ya existe alguien con este nombre de usuario" });
                }
            }
            catch (error) {
                console.log("Usuario no registrado");
                const consulta = yield conn.query('INSERT into usuario set ?', [req.body]);
                res.json({ acceso: false, mensaje: "Usuario registrado" });
            }
        }
        else {
            console.log("Debe llenar todos los campos");
            res.json({ acceso: false, mensaje: "Debe llenar todos los campos" });
        }
    });
}
exports.registrarUsuario = registrarUsuario;
;
