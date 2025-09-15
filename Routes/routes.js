import express from 'express'
import mongoose from 'mongoose'
import { addTask } from '../Contorllers/addTask.js'
import { getTask } from '../Contorllers/getTask.js'
import { setCompleted } from '../Contorllers/setCompleted.js'
import { deleteTask } from '../Contorllers/deleteTask.js'

const router = express.Router()

router.post('/addTask', addTask)
router.get('/getTask', getTask)
router.patch('/setCompleted', setCompleted)
router.patch('/deleteTask', deleteTask)

export default router
