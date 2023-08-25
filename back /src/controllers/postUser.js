const User = require ('../DB_connection')

const postUser=async(req, res)=>{
     try {
        res.status(400).send("Faltan datos")
     } catch (error) {
        res.status(500).send(error.message)
     }


}

module.exports=postUser