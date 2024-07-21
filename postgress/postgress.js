import { Sequelize } from 'sequelize'
import { createYojnaModel } from '../model/yojna1.model.js'

const sequelize = new Sequelize('popusad_db', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres'
})

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
