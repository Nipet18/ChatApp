const express = require('express')
const app = express()
const http = require('https').createServer(app)

/*const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log('listening on port ${PORT}')
})*/

//router
app.get('/', function (reg, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000)

