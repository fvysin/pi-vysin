const { DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', { 
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
      },
   name: {
    allowNull: false,
    type: DataTypes.STRING,
    primaryKey: true
      },
   status: {
    dataType: Enum (Alive - Dead - unknown),
    allowNull: false  
      },
   species: {
    type: DataTypes.STRING,
    allowNull: false
       
      },
      gender: {
        dataType: Enum (Female - Male - Genderless - unknown)
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },{ timestamps: false }
    )};
  

