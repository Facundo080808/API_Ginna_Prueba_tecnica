import { Router, Request, Response } from 'express';
import { TaskRouter } from './Tasks/routes.task';

export const router = Router();

router.use('/tasks',TaskRouter);


