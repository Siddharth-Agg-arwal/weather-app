const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=434ab6f6e0441c0b366be943d9f8498c'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('an error', error)
})

request.end()