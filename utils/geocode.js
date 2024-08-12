const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&proximity=ip&access_token=pk.eyJ1Ijoic2lkZGhhcnRoLWFnZy1hcndhbCIsImEiOiJjbHpvaTVtenEwdmt4MmlxeTg0MngwdDBpIn0.iafy9pFekyijpxnC_TDUGA'

    request({ url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services.', undefined) //adding undefined is optional as its the default value.
        }
        else if(body.features.length === 0){
            callback('Try again for another location')
        }
        else{
            callback(undefined, {
                latitude : body.features[0].properties.coordinates.latitude,
                longitude : body.features[0].properties.coordinates.longitude,
                location : body.features[0].properties.name
            })
        }
    })
}

module.exports = geocode



// const geocodeURL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=434ab6f6e0441c0b366be943d9f8498c'
// const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=punjab&proximity=ip&access_token=pk.eyJ1Ijoic2lkZGhhcnRoLWFnZy1hcndhbCIsImEiOiJjbHpvaTVtenEwdmt4MmlxeTg0MngwdDBpIn0.iafy9pFekyijpxnC_TDUGA'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to location services')
//     }
//     else if(response.body.features.length === 0){
//         console.log('unable to find the location')
//     }
//     else{
//         const latitude = response.body.features[0].properties.coordinates.latitude
//         const longitude = response.body.features[0].properties.coordinates.longitude
//         console.log(latitude, longitude)
//         // console.log(response.body.features[0].properties.coordinates)
//     }
// })
