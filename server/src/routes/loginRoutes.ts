import {Router} from 'express';

const router=Router();

import {getLogin, validarCredenciales} from '../controllers/loginController';

router.route('/')
    .get(getLogin)
    .post(validarCredenciales);
    export default router;