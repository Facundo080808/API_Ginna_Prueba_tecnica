import { Request, Response } from 'express';
import { ITask, Task } from './ModelTask';
import CustomError from '../utils/customErrors';
import { TaskErrors } from '../utils/errorsTask';
import {  TasksRepository  } from './RepositoryTask';
import mongoose from 'mongoose';

export class TasksService {
   constructor(private repository:TasksRepository){}
   async getAllTasks():Promise<ITask[]>{
      try {
         const response = await this.repository.getAllTasks()
         return response
      } catch (error) {
         throw error
      }
   }
   
   async getTask(id:string):Promise<ITask|null>{
      try {
         if (!mongoose.Types.ObjectId.isValid(id)|| !id) {
            throw new CustomError(TaskErrors.NO_ID_ERROR,400)
        }
         const task = await this.repository.getTask(id)
         if (!task) throw new CustomError(TaskErrors.NOT_FOUND,404)
         return task
      } catch (error) {
         throw error
      }
   }

   async createTask(dataTask:ITask):Promise<ITask>{
      const {title, description, state} = dataTask
      try {
         if (!title || !description || !state) {
            throw new CustomError(TaskErrors.PARAMETERS, 400)
          }
         const newTask = await this.repository.createTask(dataTask)  
         return newTask
      } catch (error) {
         throw error
      }
   }

   async updateTask(id:string, dataTask:ITask):Promise<ITask|null>{
      try {
         if (!mongoose.Types.ObjectId.isValid(id)|| !id) {
            throw new CustomError(TaskErrors.NO_ID_ERROR,400)
        }
         const updatedTask = await this.repository.updateTask(id, dataTask)
         if (updatedTask === null) {
           throw new CustomError(TaskErrors.NOT_FOUND, 404);
         }
         return updatedTask;
       } catch (error) {
         throw error
       }
   }

   async deleteTask(id:string):Promise<ITask|null>{
      try {
         if (!mongoose.Types.ObjectId.isValid(id)|| !id) {
            throw new CustomError(TaskErrors.NO_ID_ERROR,400)
        }
         const deleteTask = await this.repository.deleteTask(id)
         if (!deleteTask) throw new CustomError(TaskErrors.ERROR_ID,404)
         return deleteTask
      } catch (error) {
         throw error
      }
   }
}
