const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')


// console.log(process.argv[2])
const location = process.argv[2]


// console.log(process.argv.length)
if(!location){
    console.log("Enter a location.")
}
else{
    geocode(location, (error, { latitude, longitude, location}) => {
        if(error){
            return console.log(error)
        }

        // console.log('Data', data)
        weather( latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log('Error', error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
