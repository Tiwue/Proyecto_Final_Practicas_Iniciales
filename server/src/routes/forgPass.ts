import {Router} from 'express';
const router=Router();

import {recuperarContrase├▒a} from '../controllers/forgPassController';

router.route('/')
    .post(recuperarContrase├▒a);
    export default router;