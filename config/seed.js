// Require connection file to connect
const mongoose = require('../config/db-connection.js');
// Require Models for delete and create operations
const Grades = require('../models/gradeModel.js');
const Students = require('../models/studentModel.js');
 const Teachercomment= require('../models/teacherCommentsModel.js')


 const students = [
  {
    studentName: "student1",
    email: "student1234@gmail.com",
    password: "1234567",
   
  },
  {
    studentName:"student2",
    email:"student34@gmail.com",
    password:"23456",
   
    },
    {
      studentName:"student3",
    email:"student5@gmail.com",
    password:"29876",
    
    },
    {
      studentName:"student4",
    email:"student45@gmail.com",
    password:"87907",
    
    }
];
const grades = [
  {
    math:"100",
    science:"95",
    english:"90"
  },
  {
   math:"60",
    science:"78",
    english:"75"
  },
  {
    math:"89",
    science:"76",
    english:"98"
  },
  {
    math:"88",
    science:"73",
    english:"92"
  }

    
];
const comments=[
   {
    comment:"awesome Job"
   },
   {
    comment:"Needs Improvement"
   },
   {
    comment:"Good Job"
   },
   {
    comment:"almost there good Job"
   }
   
  
]

async function seed() {
  try {
    //Delete pre-existing data new data with no repeated data
    await Students.deleteMany({});
    await Grades.deleteMany({});
    await Teachercomment.deleteMany({});

    const createdGrades = await Grades.create(grades);

    console.log('grades ', createdGrades);

    const createdStudents = await Students.create(students);

    console.log('Students: ', createdStudents);

    const createComments = await Teachercomment.create(comments);

    console.log('comments: ', createComments);
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();