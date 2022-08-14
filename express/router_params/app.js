//The req.params property is an object containing properties mapped to the named route “parameters”. 
//For example, if you have the route /student/:id, then the “id” property is available as req.params.id. 
//This object defaults to {}.

const express = require('express')
const app = express()
const port = process.env.PORT || '3000'


app.get('/product/:category/:id',(req,res)=>{
    console.log(req.params)
    res.send(`category:${req.params.category} and id: ${req.params.id}`)

    // we can destructure the above line 

    const {category, id} = req.params
    res.send(`category:${category} and id: ${id}`)

})


app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})
