import mongoose from 'mongoose'
import { ToDoModel } from '../Model/database.js'

function addTask(req,res){
    const body= req.body
    ToDoModel.create({
        taskName:body.taskName,
        taskDescription:body.taskDescription,
        endTime:body.endTime
    })
    res.status(201).json({message:"added new task"})
}
export {addTask}