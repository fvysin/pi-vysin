/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./SearchBar.module.css"



export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange=(evento) => {
      setId(evento.target.value);
   }
   const handleSearchClick = () => {
      onSearch(id);
    };
        

   return (
      <div className={styles.div}>
        
         <input 
           className= {styles.input}
            type='search'
            placeholder="Busca un personaje" 
            value ={id} 
            onChange={handleChange}
          
         />
        
         <button 
            className ={styles.button} 
            type="button" 
            onClick= {handleSearchClick}
            >Buscar
            </button>
      </div>
   );
}
