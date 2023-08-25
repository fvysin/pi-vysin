const User = require ('./models/User')

const login =(req, res)=>{

    try {
        res.status(400).json("Faltan datos")
        res.status(404).json("Usuario no encontrado")
        res.status(403).json("Contraseña incorrecta")
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports=login