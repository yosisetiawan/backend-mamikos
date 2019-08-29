'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    id_booking: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_dorm: DataTypes.INTEGER,
    boarding_date: DataTypes.DATE,
    boarding_out_date: DataTypes.DATE
  }, {});
  booking.associate = function(models) {
    
  };
  return booking;
};