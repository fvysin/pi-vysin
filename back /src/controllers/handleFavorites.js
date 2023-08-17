let myFavorites =[]

const postFav =(req, res) =>{
    const character= req.body
    myFavorites.push(character)
    return res.status(200).json(myFavorites)
}

const deleteFav= (req, res)=>{
    const {id}=req.params
    const eliminados = myFavorites.filter ((favorite)=>favorite.id !== +id)
    return res.status(200).json(eliminados)

}


module.exports ={
    postFav,
    deleteFav
}





