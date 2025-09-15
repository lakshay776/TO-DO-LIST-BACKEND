import mongoose from 'mongoose'
import { ToDoModel } from '../Model/database.js'

async function deleteTask(req, res) {
    try {
        const task = req.body;
        const result = await ToDoModel.deleteOne({ taskName: task.taskName });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "task not found" });
        }
        return res.status(201).json({ message: "task deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "there was some error" });
    }
}
export { deleteTask }