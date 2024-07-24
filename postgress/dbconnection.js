import { Sequelize } from 'sequelize'
import { createYojnaModel } from '../model/yojnaModel.js'
import { config } from 'dotenv'
config()
const sequelize = new Sequelize(
  process.env.DBuser,
  process.env.DBdatabase,
  process.env.DBpassword,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

let yojanaoneModelsample = null
const Connection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    yojanaoneModelsample = await createYojnaModel(sequelize)
    await sequelize.sync()
    console.log('database synced')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export { Connection, yojanaoneModelsample }
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
