const request = require('request')

const weather = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=434ab6f6e0441c0b366be943d9f8498c&units=metric'
    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Cannot access the weather services')
        }
        else if(body.cod !== 200){
            callback('Try again for another location')
        }
        else{
            callback(undefined, {
                // temperature : body.main.temp,
                // description : body.weather[0].main,
                // location : body.name,
                forecast : 'The current weather is ' + body.weather[0].main + ' with a temperature of ' + body.main.temp + ' degrees celsius at ' + body.name
            })
        }
    })
}

module.exports = weather



// const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=434ab6f6e0441c0b366be943d9f8498c'

// request({ url: weatherURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connnect to weather services')
//     }
//     else if(response.body.coord.length === 0){
//         console.log('Try again for another location')
//     }
//     else{
//         console.log('Currently the weather is ' + response.body.weather[0].main + ' at a temperature of ' + response.body.main.temp + ' at ' + response.body.name)
//     }
// })

