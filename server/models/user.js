'use strict';
const {
  Model
} = require('sequelize');
// const { hashPass } = require('../helpers/bcrypt')
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: async (user, opt) => {
        // let newPw = hashPass(user.password)
        // user.password = newPw
        let salt = await bcrypt.genSaltSync(10)
        let newPw = await bcrypt.hashSync(user.password, salt)
        user.password = newPw
      }
    },
    modelName: 'User'
  });
  return User;
};