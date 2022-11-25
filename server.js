const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure neat the top
require('dotenv').config();
// Connect to the database (after the dotenv)
require('./config/database');

const userRouter = require('./routes/api/users')
const aboutRouter = require('./routes/api/about')
const contactRouter = require('./routes/api/contact')
const homeRouter = require('./routes/api/home')
const portfolioItemRouter = require('./routes/api/portfolioItem')
const portfolioItemImageRouter = require('./routes/api/portfolioItemImage')
const resumeDescriptionItemRouter = require('./routes/api/resumeDescriptionItem')
const resumeItemRouter = require('./routes/api/resumeItem')
const skillRouter = require('./routes/api/skill')

const app = express();

app.use(logger('dev'));
app.use(express.json());

if( process.env.NODE_ENV === 'production'){
  app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, 'build')));
}

// Mount Custom Middleware
app.use(require('./config/checkToken'))

// API routes here
app.use('/api/users', userRouter)
app.use('/api/about', aboutRouter)
app.use('/api/contact', contactRouter)
app.use('/api/home', homeRouter)
app.use('/api/portfolioItems', portfolioItemRouter)
app.use('/api/portfolioItemImages', portfolioItemImageRouter)
app.use('/api/resumeDescriptionItems', resumeDescriptionItemRouter)
app.use('/api/resumeItems', resumeItemRouter)
app.use('/api/skills', skillRouter)

// "Catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

