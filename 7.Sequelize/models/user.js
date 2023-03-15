'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Cart, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING
      // contactNo:
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};

// 'use strict';
// const sequelize = require('../utils/database');
// const {
//   Model, DataTypes
// } = require('sequelize');

//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     userName: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });

//   module.exports = User;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../db/sequelize');

// class User extends Model {}
// User.init({
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize,
//   modelName: 'User'
// });

// module.exports = User;
