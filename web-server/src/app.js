const path = require('path')
const express = require('express')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


//setup handlebars engine and view location
app.set('views', viewsPath)
app.set("view engine", "hbs");

//setup static dir to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sid',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'lmao kys.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast : '50 degrees',
        location : 'Patiala'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})