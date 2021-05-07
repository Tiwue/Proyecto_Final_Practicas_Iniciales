import {Router} from 'express';

const router=Router();

import { cerrarSesion} from '../controllers/logoutController';

router.route('/')
    .get(cerrarSesion);
    export default router;