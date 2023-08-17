
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
const URL = 'http://localhost:3001/rickandmorty/login/';



function App() {
 
      
      
      
      
      const [characters, setCharacters] = useState([]);
      


      const onSearch = async (id) =>{
         try {
            
          const {data} = await axios(`${URL_BASE}/${id}`)
       
            if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
            }
         
         } catch (error) {
            return alert('¡No hay personajes con este ID!');
               }
         
            }

      
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
         
       
         async function login(userData) {
            try {
               
               const { email, password } = userData;
               const {data} = await axios(URL + `?email= ${email} & password=${password}`)
               const { access } = data;
               
               setAccess(data);
               access && navigate('/home');
               
               } catch (error) {
                  console.log(error.message)
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
