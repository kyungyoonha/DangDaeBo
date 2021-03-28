require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
