require('dotenv').config();
const async = require('async');
const { sequelize, User, Post } = require('../models');

const users = [];
for (let i = 0; i < 15; i++) {
  users.push({ username: 'username_' + i, password: 'password_' + i });
}

sequelize.sync().then(() => {
  async.eachSeries(users, (user, cb) => {
    User.create(user).then(user => {
      const posts = [];
      const num_posts = Math.floor(Math.random() * 6);
      for (let i = 0; i < num_posts; i++) {
        posts.push({
          title: 'Post ' + i + ' of user ' + user.id,
          content: 'something here',
          user_id: user.id
        });
      }
      async.eachSeries(posts, (post, cb) => {
        Post.create(post).then(post => cb()).catch(err => cb(err));
      }, (err) => cb(err))
    })
      .catch(err => cb(err))
  }, (err) => {
    if (err) {return console.log(err); }
    console.log('Fake successfully');
    process.exit(0);
  });
})
  .catch(err => console.log(err))
