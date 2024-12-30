import { Router } from "express";
import { TasksController } from "./ControllerTasks";
import { TasksService } from "./ServiceTask";
import { TaskBody, validateBody } from "../utils/body.validator";
import { TasksRepository } from "./RepositoryTask";



export const TaskRouter = Router();
//DI
const Repository = new TasksRepository()
const service = new TasksService(Repository)
const Controller = new TasksController(service)



TaskRouter.post('/create',validateBody(TaskBody.create),Controller.createTask.bind(Controller))

TaskRouter.get('/',Controller.getAllTasks.bind(Controller))

TaskRouter.get('/:id',Controller.getTask.bind(Controller))

TaskRouter.put('/put/:id',Controller.putTask.bind(Controller))

TaskRouter.delete('/delete/:id',Controller.deleteTask.bind(Controller))

