'use strict';
module.exports = (sequelize, DataTypes) => {
  const dorm = sequelize.define('dorm', {
    dormName: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    roomAvailable: DataTypes.INTEGER,
    sizeDorm: DataTypes.STRING,
    description: DataTypes.STRING,
    dormType: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    images: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  dorm.associate = function(models) {
    dorm.belongsTo(models.user, {
      as:'created_by',
      foreignKey: 'createdBy'
    })
  };
  return dorm;
};