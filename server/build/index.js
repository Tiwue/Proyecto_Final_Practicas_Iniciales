"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const cambio_1 = __importDefault(require("./routes/cambio"));
const forgPass_1 = __importDefault(require("./routes/forgPass"));
const registroRoutes_1 = __importDefault(require("./routes/registroRoutes"));
const logoutRoutes_1 = __importDefault(require("./routes/logoutRoutes"));
const getSesionRoute_1 = __importDefault(require("./routes/getSesionRoute"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/registro', registroRoutes_1.default);
        this.app.use('/forgPass', forgPass_1.default);
        this.app.use('/cambio', cambio_1.default);
        this.app.use('/posts', publicacionesRoutes_1.default);
        this.app.use('/logout', logoutRoutes_1.default);
        this.app.use('/getSesion', getSesionRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server activo en puerto: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
