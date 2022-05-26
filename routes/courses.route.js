const express = require('express');
const router = express.Router();
var courses = require('../model/course.model');

router.route('/courses').get((req, res) => {
  res.json(courses);
});

router.route('/courses').delete((req, res) => {
  let theCourseId = +req.params.id;
  courses = courses.filter((course) => course.id !== theCourseId);
  res.json({ msg: 'success' });
});

router.route('/courses').post((req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res.json({ msg: 'success' });
});
module.exports = router;
