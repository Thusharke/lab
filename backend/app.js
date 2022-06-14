var express = require("express");
var app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myapp", function (err, client) {
  if (err) {
    console.log("Something went wrong!");
  } else {
    console.log("Database sucessfully connected");
  }
});

var Student = require("./models/Student");

app.get("/", function (req, res) {
  res.send("Hello from backend");
});

app.get("/students", function (req, res) {
  Student.find({}, function (err, students) {
    if (err) {
      console.log("SOMETHING WENT WRONG!!");
    } else {
      res.json(students);
    }
  });
});

app.post("/students", function (req, res) {
  Student.create(req.body, function (err, student) {
    if (err) console.log("SOMETHING WENT WRONG!");
    else res.json(student);
  });
});

app.put("/students/:id", function (req, res) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, student) {
    if (err) console.log("SOMETHING WENT WRONG!");
    else res.json(student);
  });
});

app.delete("/students/:id", function (req, res) {
  Student.findByIdAndDelete(req.params.id, function (err, student) {
    if (err) console.log("SOMETHING WENT WRONG!");
    else res.json(student);
  });
});

app.listen(3001, function (err) {
  if (err) {
    console.log("Something wenbt wrong!");
  } else {
    console.log("Server is running at http://localhost:3001");
  }
});
