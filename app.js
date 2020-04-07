const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//view engine setup
app.use(expressLayouts);
app.set("view engine", 'ejs');

//set static folder
app.use(express.static(__dirname + ('/public')));

//routes
app.use('/', require('./routes/index.js'));
app.use('/contact', require('./routes/contact.js'));
app.use('/my-story', require('./routes/my-story.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("App running at 8080"));
