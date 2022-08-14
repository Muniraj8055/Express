const allStudents= (req,res)=>{
    res.send("All students")
}

const deleteStudent = (req,res)=>{
    console.log(req.params)
    const { id } = req.params
    console.log(id)
    
    if(id==10){
        res.send(`Student deleted ${id}`)
    }
    else{
        res.send("You entered different id")
    }
}

module.exports = { allStudents, deleteStudent }