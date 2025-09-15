import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/routes.js'
import cors from 'cors'
// import authRoutes from './Routes/authRoutes.js'
// import { auth } from './middlewares/auth.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected successfully")
    } catch (err) {
        console.error("Database connection failed:", err)
        process.exit(1) 
    }
}

connectDB()

// Routes
// app.use('/auth', authRoutes)
app.use('/todos',  router)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: 'Something went wrong!' })
})

const PORT = process.env.PORT 
app.listen(PORT, (req,res) => {
  console.log(`Server is running on port ${PORT}`)
})  
