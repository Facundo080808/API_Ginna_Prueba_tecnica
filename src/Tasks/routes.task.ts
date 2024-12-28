import { Router } from "express";
import { TasksController } from "./controller.tasks";
import { TasksService } from "./service.task";

export const TaskRouter = Router();
const service = new TasksService()
const Controller = new TasksController(service)

TaskRouter.post('/',Controller.createTask)

TaskRouter.get('/',Controller.getAllTasks)

TaskRouter.get('/:id',Controller.getTask)

TaskRouter.put('/:id',Controller.putTask)

TaskRouter.delete('/:id',Controller.deleteTask)

