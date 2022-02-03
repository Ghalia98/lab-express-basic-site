const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('homeroute')
    console.log(__dirname)
    res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/About.html')
})
app.get('/mission', (req, res) => {
    res.sendFile(__dirname + '/views/daily-mission-page.html')
})

app.listen(port, () => {
    console.log('Listening on port')

})  