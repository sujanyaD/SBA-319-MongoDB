const db = require('../config/db-connection');
//const modeldb = require('mongoose');

// const userSchema = Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     unique: true,
//     min: 5,
//   },
//   age: {
//     type: Number,
//     required: true,
//     min: 18,
//     max: 120,
//     message: 'Age must be between 18 and 120',
//   },
//   isCool: Boolean,
//   skills: [String],
//   pets: [
//     {
//       name: String,
//       petType: String,
//       color: String,
//       age: Number,
//       isCute: Boolean,
//     },
//   ],
//   whatever: String,
// });



//Arrow functions do NOT support the "this" keyword
// userSchema.methods.logUserInfo = function () {
//   console.log(
//     `I am ${this.age} years old and I am ${this.isCool ? '' : 'not'} cool`
//   );
// };

// userSchema.statics.findOver21 = function () {
//   return this.find({ age: { $gte: 21 } });
// };

//model('User', userSchema);


const userSchema = new db.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true, unique: true, min: 5,},
  age: { type: Number,required: true,min: 18,max: 120,message: 'Age must be between 18 and 120'},
});

userSchema.index({ username: 1 });

module.exports = db.model('User', userSchema); 

