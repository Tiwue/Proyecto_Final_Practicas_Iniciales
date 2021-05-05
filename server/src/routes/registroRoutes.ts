import {Router} from 'express';

const router=Router();

import { registrarUsuario} from '../controllers/registroController';

router.route('/')
    .post(registrarUsuario);
    export default router;