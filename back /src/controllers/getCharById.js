const axios =require('axios')

const  getCharById=(res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    
    .then((response)=>response.data)// .data=> ahi es donde esta la info/respuesta
    .then(({name, gender, species, origin, image, status})=>{
        const character={
                    id:id,
                    name,
                    gender,
                    species,
                    origin,
                    image,
                    status
                }
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify(character))
            }
            )
        
    .catch((error)=>{
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end(error.message)
        })
}

module.exports = getCharById

//controller=> maneja la logica