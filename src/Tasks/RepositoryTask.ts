import { Request, Response } from 'express';
import { ITask, Task } from './ModelTask';
import CustomError from '../utils/customErrors';
import { TaskErrors } from '../utils/errorsTask';

export class TasksRepository {
   async getAllTasks():Promise<ITask[]>{

      try {
         const response = await Task.find()
         return response
      } catch (error) {
         throw error
      }
   }

   async getTask(id:string):Promise<ITask|null>{
      try {
         const task = await Task.findById(id)
         return task
      } catch (error) {
         throw error
      }
   }

   async createTask(dataTask:ITask):Promise<ITask>{
      try {
         const newTask = new Task(dataTask)
         await newTask.save()  
         return newTask
      } catch (error) {
         throw error
      }
   }

   async updateTask(id:string, dataTask:ITask):Promise<ITask|null>{
      try {
         const updatedTask = await Task.findByIdAndUpdate(id, dataTask, {
           new: true,
           runValidators: true,
         });
         return updatedTask;
       } catch (error) {
         throw error
       }
   }

   async deleteTask(id:string):Promise<ITask|null>{
      try {
         const deleteTask = await Task.findByIdAndDelete(id)
         return deleteTask
      } catch (error) {
         throw error
      }
   }
}

