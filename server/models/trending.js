'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trending = sequelize.define('Trending', {
    eventId: DataTypes.INTEGER
  }, {});
  Trending.associate = function(models) {
    // associations can be defined here
    Trending.belongsTo(models.Event, {
      foreignKey: 'eventId',
      as: 'detail'
    })
  };
  return Trending;
};