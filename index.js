const express = require('express');
var app = express(); // represents our application
var courses = require('./model/course.model');

app.get('/', (req, res) => {
  //   res.send("<h1>Hello Express !!!</h1>");
  res.sendFile('courses.html', { root: __dirname + '/public' });
});

// app.get("/script.js", (req, res) => {
//   res.sendFile("script.js", { root: __dirname });
// });
app.use(express.static('public')); // middleware

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.delete('/course/:id', (req, res) => {
  let theCourseId = +req.params.id; // converts to number
  courses = courses.filter((course) => course.id !== theCourseId);
  res.json({ msg: 'success' });
  //logic for delete - db
});

// handler if no match found !
app.use((req, res) => {
  res.status(404).sendFile('error.html', { root: __dirname + '/public' });
});

app.listen(5000, () => console.log('Server running at port 5000 !'));
