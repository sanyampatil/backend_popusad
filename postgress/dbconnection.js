// import { Sequelize } from 'sequelize'
// import { createYojnaModel } from '../model/yojnaModel.js'
// import { config } from 'dotenv'
// config()
// const sequelize = new Sequelize(
//   process.env.DBuser,
//   process.env.DBdatabase,
//   process.env.DBpassword,
//   {
//     host: 'localhost',
//     dialect: 'postgres'
//   }
// )

// let yojanaoneModelsample = null
// const Connection = async () => {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//     yojanaoneModelsample = await createYojnaModel(sequelize)
//     await sequelize.sync()
//     console.log('database synced')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }

// export { Connection, yojanaoneModelsample }
// // const { Pool } = require('pg')

// import { config } from 'dotenv'
// config()
// import Pool from 'pg'

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL
// })

// pool.connect(err => {
//   if (err) throw err
//   console.log('Connect to PostgreSQL successfully!')
// })

// export { pool }

// import { db } from '@vercel/postgres'
// import fs from 'fs'
// import path from 'path'
// import Papa from 'papaparse'
// import '../envConfig.mjs'

// const parseCSV = async filePath => {}

  // db.mjs

import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

pool.connect(err => {
  if (err) {
    console.error('Connection error', err.stack)
  } else {
    console.log('Connected to the database')
  }
})

export default pool
