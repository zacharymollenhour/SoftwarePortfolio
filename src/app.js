//server setup
const express = require('express')
const app = express()
var path = require('path');
const port = 3000;

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));

//Render Home Page
app.get('/', function (req, res) {
    res.render('pages/home')
})

app.listen(port, () => console.log('Website is Live'));