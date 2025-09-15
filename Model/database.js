import mongoose from "mongoose";

const ToDoSchema= mongoose.Schema({
    
    taskName:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String, 
        required:true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    },
    endTime:{
        type:Date, 

    },
    status:{
        type:Boolean, 
        default:false
    }
})
const ToDoModel= mongoose.model('ToDoModel', ToDoSchema);
export {ToDoModel}