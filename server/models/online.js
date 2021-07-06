'use strict';
module.exports = (sequelize, DataTypes) => {
  const Online = sequelize.define('Online', {
    eventId: DataTypes.INTEGER
  }, {});
  Online.associate = function(models) {
    // associations can be defined here
    Online.belongsTo(models.Event, {
      foreignKey: 'eventId',
      as: 'detail'
    })
  };
  return Online;
};