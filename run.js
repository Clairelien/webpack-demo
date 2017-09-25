const path = require('path')
var express = require('express')
var app = express()

app.get('/', function (req, res) {
//   res.send('Hello World')
  res.sendFile(path.resolve(__dirname, 'dist')+'/index.html')
})

app.listen(3000)