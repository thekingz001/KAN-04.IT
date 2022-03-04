// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nps', 'nps_user', '#2r&xVgOwF6', {
    host: 'kns-database21.cu4s2ibvwwoe.ap-southeast-1.rds.amazonaws.com',
    dialect: "mysql"
});

sequelize.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./routes/index.js'));



// Listen on Port 5000
app.listen(port, () => console.info(`http://localhost:${port}`))