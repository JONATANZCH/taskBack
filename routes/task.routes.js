const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks.controller');

router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/status/:status', taskController.getTasksByStatus);

module.exports = router;