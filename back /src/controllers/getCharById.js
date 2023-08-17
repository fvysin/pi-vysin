const axios =require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

// const getCharById=(req, res)=>{
//     const {id}=req.params
//     axios.get(`${URL}/${id}`)
//     .then((response)=>response.data)
//     .then(({name, gender, species, origin, image, status})=>{
//     if(id && name){
//     const character={
//     id:id,
//     name,
//     gender,
//     species,
//     origin,
//     image,
//     status
//     } 
//     return res.status(200).json(character)
//     }
//     return res.status(404).send('Not found')
//     }) 
//     .catch(error=>res.status(500).send (error.message))
//     }
const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, gender, status, species, origin, image} = (await axios.get(URL + Number(id))).data
        const character = {
            id: +id,
            name,
            image,
            gender,
            species,
            origin,
            status
        }
        return character.name 
        ? res.status(200).json(character) 
        : res.status(404).send('Not fount!')


    } catch (error) {
        res.status(500).send(error.message)
    }
};
    module.exports = { getCharById }
