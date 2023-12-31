import express from 'express';

import { createUser, deleteUser, getUser, getUsers, patchUser } from '../controllers/users.js';

const router = express.Router();



// all routes here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);


export default router;

