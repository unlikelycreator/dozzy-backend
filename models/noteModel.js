// Requiring module
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  color:{
    type:String,
  }
});

module.exports = mongoose.model('Note', noteSchema);