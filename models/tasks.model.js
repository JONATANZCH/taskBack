const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },  // Añadido campo de descripción
  status: { type: String, default: 'pending', enum: ['pending', 'completed'] }
});

module.exports = mongoose.model('Task', taskSchema);