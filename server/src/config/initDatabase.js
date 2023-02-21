const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/MERN-app';

async function initDatabase(){
   mongoose.set('strictQuery', false);

   await mongoose.connect(uri)
   console.log("Databse connected!");
}

module.exports = initDatabase