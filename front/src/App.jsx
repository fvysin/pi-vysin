
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites.jsx';
import NavBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';


const URL_BASE = "http://localhost:3001/rickandmorty/character";

const EMAIL= "florvysin@gmail.com";
const PASSWORD= "12345F";

function App() {


   const [characters, setCharacters] = useState([]);
   
   const onSearch = (id) =>{
      axios(`${URL_BASE}/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   
   const onClose = (id)=>{
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   };
   
   const {pathname} = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   
  
   function login(userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
         !access && navigate('/');
      }, [access, navigate]);

  
   return (
      <div className ='App'>
         
        {pathname !== '/' && <NavBar onSearch ={onSearch} />}
         <Routes>
            <Route path= "/home"element= {<Cards characters={characters} onClose={onClose} />} />
            <Route path= "/about" element= {<About/>} />
            <Route path= "/detail/:id" element= {<Detail/>}/>
            <Route path= "/" element= {<Form login= {login} />} />
            <Route path= "/favorites" element= {<Favorites />}/>
         </Routes>
      
      </div>
   )
}




export default App;
