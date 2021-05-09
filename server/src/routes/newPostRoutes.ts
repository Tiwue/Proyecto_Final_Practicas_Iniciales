import {Router} from 'express';

const router=Router();

import { createNewPost } from '../controllers/newPostController';

router.route('/')
    .post(createNewPost);
    export default router;