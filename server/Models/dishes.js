


module.exports = (sequelize, DataTypes) => 
sequelize.define('Dish', {
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dish: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    unique: true
  }
  
})    
