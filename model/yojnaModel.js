import { DataTypes } from 'sequelize'

export const createYojnaModel = async sequelize => {
  const yojnaOneChota = sequelize.define(
    'myYojnaList',
    {
      sr_no: {
        type: DataTypes.STRING
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      village: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subdivision: {
        type: DataTypes.STRING,
        allowNull: false
      },
      caste: {
        type: DataTypes.STRING,
        allowNull: false
      },
      yojna_name: {
        type: DataTypes.STRING
      },
      etc_info: {
        type: DataTypes.STRING
      },
      Eligible: {
        type: DataTypes.BOOLEAN
      },

      year_yojna: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )
  return yojnaOneChota
}
