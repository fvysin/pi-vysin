/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, onClose, name, status, species, gender, image, removeFav, addFav, myFavorites})=> {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite =()=>{
      if (isFav){
         setIsFav(false);
         removeFav(id)
         }else{
            setIsFav(true)
               addFav(id, onClose, name, status, species, gender, image)
            }
         }
   

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);
   
   return (
      < div className= {styles.div}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) :(
      <button onClick={handleFavorite}>🤍</button>
   )

}
      <button className = {styles.closeButton} onClick={() =>onClose (id)}> X </button>
    
   
         <img className={styles.image} src ={ image} alt={name} />
      <br />
         <Link to={`/detail/${id}`} >
            <h3 className={styles.name}>{name}</h3>
            <br />
         </Link>

         <h2>{status}</h2>
         <div className={styles.atributos}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
         </div>
      </div>
   );
} 

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
};

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}
   
   

export default connect( mapStateToProps,
   mapDispatchToProps
   )(Card)


