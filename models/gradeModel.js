// const db = require('../config/db-connection');
const { Schema,model } = require('../config/db-connection');
const gradeSchema = new Schema({
  math: {
   type: Number,
    required: true
    
  },
  science: {
    type: Number,
    required: true
    
  },
 english: {
      type: Number,
    // type: db.Schema.Types.ObjectId,
    // ref: 'Student',
    required: true
  }
  
});

// const grade = db.model('grade', gradeSchema);
module.exports=model('gradeModel',gradeSchema);

// module.exports = grade;
