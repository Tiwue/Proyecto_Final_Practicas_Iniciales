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
exports.createNewPost = void 0;
const database_1 = require("../database");
function createNewPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const datos = req.body;
        const conn = yield database_1.connect();
        if (datos.idUsuario != "0" && datos.idJuego != "0" && datos.Comentario != "") {
            try {
                const consulta = yield conn.query('INSERT into publicacion set ?', [req.body]);
                res.json({ mensaje: "publicado" });
                console.log("publicado");
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("Debe llenar todos los campos");
            //res.json({ acceso: false, mensaje: "Debe llenar todos los campos" })
        }
    });
}
exports.createNewPost = createNewPost;
;
