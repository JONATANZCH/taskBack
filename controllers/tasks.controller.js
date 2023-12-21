const Task = require('../models/tasks.model');

const createTask = async (req, res) => {
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).json({
        message: 'Task successfully created!',
        task: newTask
      });
    } catch (error) {
      res.status(400).json({
        message: 'Error creating task',
        error: error.message
      });
    }
};

const updateTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({
        message: 'Task successfully updated!',
        task: task
      });
    } catch (error) {
      res.status(400).json({
        message: 'Error updating task',
        error: error.message
      });
    }
};

const deleteTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({
        message: 'Task successfully deleted',
        task: task
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting task',
        error: error.message
      });
    }
};

const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.json({
        message: 'Tasks retrieved successfully',
        tasks: tasks
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving tasks',
        error: error.message
      });
    }
};

const getTasksByStatus = async (req, res) => {
    try {
      const tasks = await Task.find({ status: req.params.status });
      if (tasks.length === 0) {
        return res.status(404).json({ message: 'No tasks found with the given status' });
      }
      res.json({
        message: `Tasks with status ${req.params.status} retrieved successfully`,
        tasks: tasks
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving tasks by status',
        error: error.message
      });
    }
};

module.exports = { createTask, updateTask, deleteTask, getAllTasks, getTasksByStatus };