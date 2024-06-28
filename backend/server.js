import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import DB from './utils/db.js'
import router from './routes/auth.js'
import cookieParser from 'cookie-parser'
import adminRoutes from './routes/adminRoute.js'


dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/api/auth',router)
app.use('/api/admin',adminRoutes)

app.get('/',(req,res) =>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")))
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
  })
app.listen(PORT, () => {
    DB()
    console.log(`Server is listening to ${PORT}`)
})