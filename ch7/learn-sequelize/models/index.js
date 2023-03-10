const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

// new Sequelize(options...)로 DB와 연결 가능
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

// Sequelize Model을 DB에 연결
db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
