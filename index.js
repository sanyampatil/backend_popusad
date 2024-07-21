import express from 'express'
import { Connection } from './postgress/postgress.js'
import router from './Routes/mainRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(
  cors({
    origin: `http://localhost:5173`,
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
  })
)


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
  

app.use(router)
const PORT = 4000
console.log('sanyam 98rjj')
app.listen(PORT, () => {
  Connection()
  console.log('running server at port', PORT)
})
