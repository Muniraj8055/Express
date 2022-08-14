import express from 'express'
import myLogger from './middleware/logger_middleware.js'
const app = express()
const port = process.env.PORT || '3000'

import web from './routes/web.js'
import student from './routes/student.js'

//set template engine
app.set('view engine', 'ejs')


//application level middleware
// app.use(myLogger) => this is for whole application
// app.use('/about',myLogger) // this is for purticular page


//load routes
app.use('/', web)
app.use('/',student)




app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})
