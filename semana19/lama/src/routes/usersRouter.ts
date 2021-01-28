import express from 'express';
import { UsersController } from '../controllers/UsersController';

export const usersRouter = express.Router();

usersRouter.post('/signUp', new UsersController().signUp);
usersRouter.post('/login', new UsersController().login);