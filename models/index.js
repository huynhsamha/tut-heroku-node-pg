const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = require('./user');
const Post = require('./post');

/** Relationship between Entities */
User.hasMany(Post, { foreignKey: 'user_id', as: 'Posts' });
Post.belongsTo(User, { foreignKey: 'user_id', constraints: false, as: 'user' });

module.exports = {
  sequelize,
  User,
  Post
};
