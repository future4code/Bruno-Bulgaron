import express from 'express';
import { UsersController } from '../controllers/UsersController';

export const usersRouter = express.Router();

usersRouter.post('/signUp', new UsersController().signUp);
// userRouter.post('/login', new UsersController().login);