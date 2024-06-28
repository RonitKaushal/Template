import express from 'express'
import { isAdmin } from '../middleware/verifyToken.js'
import { DeleteUser, Getuser } from '../controllers/admin.js'

const adminRoutes = express.Router()
adminRoutes.get('/getuser',isAdmin,Getuser)
adminRoutes.delete('/delete/:id',isAdmin,DeleteUser)

export default adminRoutes