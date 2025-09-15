import { ToDoModel } from '../Model/database.js'

async function getTask(req,res){
    try{
     const data=await ToDoModel.find({})
     res.json(data)
    }catch(err){
        console.log(err)
    }
}

export {getTask}