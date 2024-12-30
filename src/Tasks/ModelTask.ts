import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  id?:string
  title:string;
  description:number;
  state:boolean;
}

const taskSchema: Schema = new Schema(
  {
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    state:{
        type:Boolean,
        required:true
    },
  },
  {
    timestamps: true, 
  }
);

export const Task = mongoose.model<ITask>(
  "task",
  taskSchema
);