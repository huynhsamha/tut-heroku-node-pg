require('dotenv').config();
const { sequelize } = require('../models');

sequelize.drop().then(() => {
  console.log('Drop successully'); process.exit(0);
}).catch(err => {
  console.log(err); process.exit(0);
})
