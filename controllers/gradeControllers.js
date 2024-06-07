// controllers/postController.js
const grade = require('../models/gradeModel');

// GET all posts
const getAllGrades = async (req, res) => {
  try {
    const grade = await grade.find();
    res.json(grade);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single post by ID
const getGradeById = async (req, res) => {
  try {
    const grade = await grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).json({ message: 'grade not found' });
    }
    res.json(grade);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new post
const createGrade = async (req, res) => {
  const grade = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });
  try {
    const newGrade = await grade.save();
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PATCH/PUT update a post
const updateGrade = async (req, res) => {
  try {
    const grade = await grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(grade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a post
const deleteGrade = async (req, res) => {
  try {
    await grade.findByIdAndDelete(req.params.id);
    res.json({ message: 'grade deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {  getAllGrades,getGradeById, createGrade, updateGrade, deleteGrade };
