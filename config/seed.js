// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const grade = require('../models/gradeModel.js');
const Student = require('../models/studentModel.js');
// const teachercommentRouter= require('../models/teacherCommentsModel.js')


const Students = [
  {
    username: "student1",
    email: "student1234@gmail.com",
    password: "1234567",
   
  },
  {
    username:"student2",
    email:"student34@gmail.com",
    password:"23456",
   
    },
    {
    username:"student3",
    email:"student5@gmail.com",
    password:"29876",
    
    },
    {
    username:"student4",
    email:"student45@gmail.com",
    password:"87907",
    
    }
];

const studentGrade = [
  {
    Math:"100",
    Science:"95",
    English:"90"
  }
    

];

async function seed() {
  try {
    //Delete pre-existing data new data with no repeated data
    await Student.deleteMany({});
    await grade.deleteMany({});

    const createdGrades = await grade.create(grade);

    console.log('grade: ', createdGrades);

    const createdStudents = await Student.create(Students);

    console.log('Students: ', createdStudents);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();