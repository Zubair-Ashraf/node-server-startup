import express from 'express';
import { authRoutes } from './Auth';

const routes = express.Router();

routes.use('/auth', authRoutes);

export default routes;
