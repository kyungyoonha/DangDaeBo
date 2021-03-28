const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: false,
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        pw: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: false,
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {}
};
