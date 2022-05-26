const express = require('express');
const path = require('path');
const app = express(); // represents our application
const coursesRoutes = require('./routes/courses.route');
const productRoutes = require('./routes/products.route');

app.set('views', path.resolve('./', 'views'));
app.set('view engine', 'pug');

app.use(express.static('public')); // middleware
app.use(express.json()); // middleware for reading JSON body from request object
app.use('/', coursesRoutes); // adding courses routes after "/"
app.use('/products', productRoutes); // adding products routes after "/"

app.get('/', (req, res) => {
  // res.sendFile("Courses.html", { root: __dirname + "/public" });
  res.sendFile('courses.html', { root: path.resolve('./', 'public') });
});

// handler if no match found !
app.use((req, res) => {
  res
    .status(404)
    .sendFile('error.html', { root: path.resolve('./', 'public') });
});

app.listen(5000, () => console.log('Server running at port 5000 !'));
