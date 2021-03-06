var express = require('express');
var router = express.Router();

const { Post, User } = require('../models');

/* GET posts listing. */
router.get('/', function (req, res, next) {
  Post.findAll({
    include: [{ model: User, as: 'user' }]
  })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
});

module.exports = router;
