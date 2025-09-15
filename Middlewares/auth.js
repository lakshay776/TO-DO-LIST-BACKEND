import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY 

export const auth = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) return res.status(401).json({ message: "No token" })
    try {
        const decoded = jwt.verify(token, SECRET_KEY, { issuer: "TodoAppAuth" })
        req.user = decoded
        next()
    } catch (error) {
        res.status(403).json({ message: "Invalid token" })
    }
}
