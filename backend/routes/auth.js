import express from 'express'
const router = express.Router()
import { Register, Login } from '../controllers/auth.js'

router.post('/register', Register)
router.post('/login', Login)
router.post('/')

export default router