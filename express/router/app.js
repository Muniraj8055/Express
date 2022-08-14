const express = require("express");
const app = express()
const port = process.env.PORT || '3000'

// we creaed some routes and importing here

const stu = require('./routes/student.js')
const tea = require('./routes/teacher.js')

//load router modules

//The app.use() function is used to mount the specified middleware function(s) at the 
//path which is being specified. It is mostly used to set up middleware for your application.

app.use(function (req, res, next) {
    console.log("Middleware called")
    next();
});
    

app.use('/stu', stu)
app.use('/tea', tea)



app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
})