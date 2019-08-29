'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    job: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  user.associate = function(models) {
  };
  return user;
};