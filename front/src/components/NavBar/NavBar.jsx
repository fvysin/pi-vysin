/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";



export default function NavBar ({onSearch}){
    return(
        <div className={styles.nav}>
            <SearchBar onSearch = {onSearch}/>
           
           <Link to = '/favorites'
           className={styles.links}>
           <button> Favorites  </button>
           </Link>
           
            <Link to='/about'
            className={styles.links}> 
           <button>  About </button>
            </Link>
        
            <Link to='/home'className={styles.links}> 
            <button>Home</button>
            </Link>


        </div>

    )
}

