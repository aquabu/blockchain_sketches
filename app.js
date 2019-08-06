const express = require('express')
const app = express()
const router = express.Router()

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/express/index.html'))
// })
app.use(express.static(__dirname + '/static'))
app.use('/', router)
app.listen(8080)

console.log('Listening on port 8080')