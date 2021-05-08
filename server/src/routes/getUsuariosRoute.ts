import {Router} from 'express';

const router=Router();

import {obtenerUsers } from '../controllers/getUsuariosController';

router.route('/')
    .get(obtenerUsers)
    export default router;