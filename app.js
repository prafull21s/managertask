const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// for testing purposes
var testRoutes = require('./routes/crud');

// Import my test routes into the path '/test'
app.use('/v1', testRoutes);

// to show on port no 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})
