import { ToDoModel } from '../Model/database.js'
async function setCompleted(req,res){
    try{
    const taskName= req.body.taskName
   await ToDoModel.updateOne({taskName:taskName}, 
        {$set:{status:true}}
    )
    res.status(201).json({"message":"updated the task"})
    }catch(err){
        console.log(err)
    }
    }
export {setCompleted}
