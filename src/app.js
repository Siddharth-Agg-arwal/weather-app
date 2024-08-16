const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and view location
app.set('views', viewsPath)
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath)

//setup static dir to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sid',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Sid',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'lmao kys.',
        name: 'Sid',
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error : 'Enter a valid address.'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}= {}) => {
        if(error){
            return res.send({error})
        }
        
        weather(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                location : location, 
                forecast: forecastData
            })
            // response.send(forecastData)
        })
    })

    // res.send({
    //     forecast : '50 degrees',
    //     location : 'Patiala',
    //     address : req.query.address
    // })
    
})

// app.get('/products', (req, res) => {

//     if (!req.query.search) {
//         return res.send({
//             error: 'You must provide a search term'
//         })
//     }

//     console.log(req.query)
//     res.send({
//         products : [] 
//     })
// })

app.get('/help/*', (req, res) => {
    res.render('404',{
        title : '404',
        name : 'Sid',
        errorMsg : 'Help article not found.',
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title : '404',
        name : 'Sid',
        errorMsg : '404, page not found',
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})