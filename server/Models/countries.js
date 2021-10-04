



module.exports = (sequelize, DataTypes) => 
sequelize.define('Country', {
  type:{
    type: DataTypes.STRING,
    allowNull: false
  },
  properties:  {
      type: DataTypes.JSON,
      allowNull: false
  },
  geometry: {
    type: DataTypes.JSON,
    allowNull: false
  }
})

