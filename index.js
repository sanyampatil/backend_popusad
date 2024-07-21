import { config } from 'dotenv'
config()
import express from 'express'
import { Connection } from './postgress/postgress.js'
import router from './Routes/mainRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
  })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use('hii', (res, req) => {
  res.send('hiiiii')
})
const port = process.env.PORT
app.listen(port, () => {
  console.log('sanyam 98rjj')
  Connection()
  console.log('running server at port', port)
})
