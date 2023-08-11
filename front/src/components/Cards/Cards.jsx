/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import styled from"./Cards.module.css";
// import React from 'react';


export default function Cards ({characters, onClose}){
   return (
   <div className={styled.div}>
      {characters.map(({id, name, status, species, gender, origin, image})=> {
    return(
    <Card
            id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            />
         
        ) })}
  
   </div>
)
}
