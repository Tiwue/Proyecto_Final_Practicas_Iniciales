import {Router} from 'express';
const router=Router();

import {recuperarContraseña} from '../controllers/forgPassController';

router.route('/')
    .post(recuperarContraseña);
    export default router;