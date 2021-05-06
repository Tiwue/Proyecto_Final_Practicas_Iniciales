import {Router} from 'express';
const router=Router();

import {cambiarContraseña} from '../controllers/forgPassController';

router.route('/')
    .post(cambiarContraseña);
    export default router;