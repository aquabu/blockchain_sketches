const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const fs = require('fs')
const root = path.join(__dirname, '/static')
const truffleBuildPath = path.join(__dirname, 'contracts', 'build','contracts')

app.get('/', (req, res) => {
    fs.readdir(root, (err, files) => {
        res.write(
            "<!doctype html><html lang='en'><title>Index</title><ul>"
        )
        files.forEach((file) => {
            if(!file.match(/bundle.*/) && file !== 'contract-rpc' && !file.match(/^\./)) {
                res.write(`<li><a href='${file}'>${ file.replace( /\..*$/, '' ) }</a></li>`)
            }
        })
        res.write('</ul>')
        res.end()
    })
})
app.use(express.static('static'))
app.use('/build', express.static(truffleBuildPath))
app.listen(8080)

console.log('Listening on port 8080')