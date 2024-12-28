import { Request, Response } from 'express';
import { ITask, Task } from './Model.task';


export class TasksService {
   async getAllTasks():Promise<ITask[]>{
      const response = await Task.find()
      return response
   }

   async getTask(id:string):Promise<ITask|null>{
      const task = await Task.findById(id)
      return task
   }

   async createTask(dataTask:ITask):Promise<void>{
      const newTask = new Task(dataTask)
      await newTask.save()
   }

   async putTask(id:string, dataTask:ITask):Promise<void>{
      
   }

   async deleteTask(id:string):Promise<ITask>{

    const deleteTask =await Task.findByIdAndDelete(id)
    if (!deleteTask) return throw new Error
    return deleteTask
   }
}