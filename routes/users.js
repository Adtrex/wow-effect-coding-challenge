import express from 'express';

import { getUsers, register, login, update } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/register', register );

router.post('/login', login );

router.patch('/update/:email', update );

export default router;