const Student = require('../models/studentModel');

// GET all users
const getAllStudents = async (req, res) => {
  try {
    const student = await Student.find();
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
    next(err);
  }
};

// GET a single user by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new user
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
    // next(err.message);
  }
};

// PATCH/PUT update a user
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a user
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllStudents, getStudentById,createStudent, updateStudent, deleteStudent };
