import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { userModel as Users } from '../Model/Users.js'
import dotenv from 'dotenv'

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY
const router = express.Router()

//sign up router
router.post('/signup', async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const existingUser = await Users.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new Users({ userName, email, password: hashedPassword })
        await newUser.save()
        return res.status(201).json({ message: "User created successfully" })
    }
    catch (error) {
        console.error('Signup error:', error)
        return res.status(500).json({ message: "Server error" })
    }
})

//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            SECRET_KEY,
            { expiresIn: "1h", issuer: "TodoAppAuth" }
        )
        return res.json({ token })
    } catch (error) {
        console.error('Login error:', error)
        return res.status(500).json({ message: "Server error" })
    }
})

export default router
