const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Publication = require('../models/Publication');
const Category = require('../models/Category');

dotenv.config({ path: '../../.env' });

const DB = process.env.database.replace('<password>', process.env.passwordDB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log('Connected to the DataBase'))
  .catch((err) => {
    throw err;
  });

const users = JSON.parse(fs.readFileSync(`${__dirname}/data2.json`, 'utf-8'));

const importData = async () => {
  try {
    await Publication.create(users);
    console.log('Data successfully loaded!');
  } catch (e) {
    console.log(e);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Publication.deleteMany();
    console.log('Data successfully deleted!');
  } catch (e) {
    console.log(e);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
console.log(process.argv);
