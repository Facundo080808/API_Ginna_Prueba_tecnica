   import { Request, Response } from 'express';
   import { TasksService } from './service.task';

   export class TasksController {
      constructor(private service:TasksService){}
      async getAllTasks(req:Request,res:Response):Promise<void>{
         
      }

      async getTask(req:Request,res:Response):Promise<void>{

      }

      async createTask(req:Request,res:Response):Promise<void>{

      }

      async putTask(req:Request,res:Response):Promise<void>{

      }

      async deleteTask(req:Request,res:Response):Promise<void>{
      
      }
   }