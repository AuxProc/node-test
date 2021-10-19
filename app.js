const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require("./routes/blogRouters")

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://mwood:VVHxFNnq97EisQqs@nodetut.lkk7i.mongodb.net/nodetut?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(8080))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
  
//   const blog = new Blog({
//     title: 'new blog',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   });
  
//   blog.save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    
  res.render('about', { title: 'About' });
  
});

//blog routes
app.use('/blogs/', blogRoutes);

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 - keep at bottom of code
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});