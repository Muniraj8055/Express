const express = require('express')
const app = express()
const port = process.env.PORT || '3000'

const stu = require('./routes/route')

app.use('/student', stu)



app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})
