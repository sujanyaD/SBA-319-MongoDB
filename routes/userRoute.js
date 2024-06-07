// const { Router } = require('express');
 //const usersCtrl = require('../controllers/userControllers');

// const router = Router();

// router.post('/', usersCtrl.createUser);

// router.get('/', usersCtrl.getUsers);

// // router.get('/over21', usersCtrl.findUsersOver21);

// // router.get('/email/:email', usersCtrl.findByEmail);

//  router.get('/:id', usersCtrl.getUserById);

// // router.put('/:id', usersCtrl.updateUser);

// // router.patch('/:id/skills/add', usersCtrl.addSkills);

// // router.delete('/:id', usersCtrl.deleteUser);

// module.exports = router;

// routes/userRoutes.js
const { Router } = require('express');

const userController = require('../controllers/userControllers');
const router = Router();
// GET all users
router.get('/', userController.getAllUsers);

// GET a single user by ID
router.get('/:id', userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PATCH/PUT update a user
router.patch('/:id', userController.updateUser);

// DELETE a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
