import { Router, Request, Response } from 'express';
import { TaskRouter } from './Tasks/RouterTask';

export const router = Router();

router.use('/tasks',TaskRouter);


