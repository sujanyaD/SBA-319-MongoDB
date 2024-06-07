const { Schema,model } = require('../config/db-connection');
//  const db = require('../config/db-connection');
//const modeldb = require('mongoose');

const studentSchema = new Schema({
  studentName:{ 
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
     min: 5, max:10},
  
});

//indexes for querying for student name
studentSchema.index({ studentName: 1 });

// module.exports = db.model('Students', studentSchema); 

module.exports=model('studentModel',studentSchema);