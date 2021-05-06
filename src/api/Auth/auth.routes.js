import express from 'express';
import { login, register } from './auth.controller';

const router = express.Router();

router.get('/', login);

router.post('/', register);

export { router as authRoutes };
