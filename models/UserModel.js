const db = require('../config/db-connection');
//const modeldb = require('mongoose');



const userSchema = new db.Schema({
  username:{ 
    type: String, 
    required: true,
     unique: true
     },
  email: { 
    type: String, 
    required: true,
     unique: true },
  password: {
    type: String,
    required: true, 
    unique: true,
     min: 5,},
  age: {
     type: Number,
     required: true,
     min: 18,
     max: 120,
     message: 'Age must be between 18 and 120'},
});

userSchema.index({ username: 1 });

module.exports = db.model('User', userSchema); 

