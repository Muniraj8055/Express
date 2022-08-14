//Express provides built-in middleware that allows us to serve static files directly from the file system.

//express.static() is the middleware that we can use to serve static files to the user.

const express = require('express')
const app = express()
const port = process.env.PORT || '3000'

const static = require('./routes/route')

//load static files
app.use(express.static("public"))


//load routes
app.use('/',static)





app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})
