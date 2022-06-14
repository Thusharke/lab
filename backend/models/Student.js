var mongoose = require("mongoose");
var studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});
module.exports = mongoose.model("Student", studentSchema);
