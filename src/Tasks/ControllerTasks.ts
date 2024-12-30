   import { Request, Response } from 'express';
   import {  TasksService } from './ServiceTask';
import CustomError from '../utils/customErrors';
import { TaskErrors } from '../utils/errorsTask';
//import { TaskErrors } from '../utils/errorsTask';


export class TasksController {
      constructor(private service:TasksService){}
      async getAllTasks(_req:Request,res:Response):Promise<void>{
         try {
            const response = await this.service.getAllTasks()
            console.log(response);         
            res.status(200).json(response)
         } catch (error) {
            res.status(500).json("error")
         }
      }

      async getTask(req:Request,res:Response):Promise<void>{
         try {
            const {id} =req.params
            const response = await this.service.getTask(id)
            res.status(200).json(response)
         } catch (error) {
            if (error instanceof CustomError) {
               res.status(error.statusCode).json({ success: false, message: error.message })
             } else {
               res.status(500).json({ success: false, message: "Error interno del servidor." })
             }
         }
      }

      async createTask(req:Request,res:Response):Promise<void>{
         try {
            const data = req.body
            const response = await this.service.createTask(data)
            res.status(201).json(response)
         } catch (error) {
            if (error instanceof CustomError) {
               res.status(error.statusCode).json({ success: false, message: error.message })
             } else {
               res.status(500).json({ success: false, message: "Error interno del servidor." })
             }
         }
      }

      async putTask(req:Request,res:Response):Promise<void>{
         try {
            const {id} =req.params
            const data= req.body
            const response = await this.service.updateTask(id,data)
            res.status(201).json(response)
         } catch (error) {
            if (error instanceof CustomError) {
               res.status(error.statusCode).json({ success: false, message: error.message })
             } else {
               res.status(500).json({ success: false, message: "Error interno del servidor." })
             }
         }
      }

      async deleteTask(req:Request,res:Response):Promise<void>{
         try {
            const {id} =req.params
            const response = await this.service.deleteTask(id)
            res.status(200).json(response)
         } catch (error) {
            if (error instanceof CustomError) {
               res.status(error.statusCode).json({ success: false, message: error.message })
             } else {
               res.status(500).json({ success: false, message: "Error interno del servidor." })
             }
         }
      }
   }

  