// routes/postRoutes.js
const express = require('express');

const gradeController = require('../controllers/gradeControllers.js');
const router = express.Router();
// GET all grades
router.get('/', gradeController.getAllGrades);

// GET a singlegrade
router.get('/:id',gradeController.getGradeById);

// POST a new grade
router.post('/', gradeController.createGrade);

// PATCH/PUT update a grade
router.patch('/:id', gradeController.updateGrade);

// DELETE a grade
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;
