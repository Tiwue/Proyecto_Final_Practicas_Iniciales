import {Router} from 'express';

const router=Router();

import {obtenerSesion } from '../controllers/getSesionController';

router.route('/')
    .get(obtenerSesion)
    export default router;