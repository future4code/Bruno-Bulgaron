import express from 'express';
import { ShowsController } from '../controllers/ShowsController';

export const showsRouter = express.Router();

showsRouter.post('/create', new ShowsController().createShow);