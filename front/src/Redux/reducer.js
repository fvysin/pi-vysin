/* eslint-disable no-case-declarations */
import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actiontypes";

const initialState = {
  myFavorites: [],
  allCharactersFav: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, 
        myFavorites: payload, allCharacters: payload };
      case REMOVE_FAV:
        return { ...state, myFavorites: payload };
    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter((character) => character.gender === action.payload)
      return {
        ...state,
        myFavorites: allCharactersFiltered
      }
      case ORDER:
        const allCharactersFavCopy = [state.allCharactersFav]
        return {
          ...state,
          myFavorites: payload === "A" 
          ? allCharactersFavCopy.sort((a,b)=> a.id - b.id)
          : allCharactersFavCopy.sort((a,b)=> b.id - a.id)
        }


    default:
      return {
        ...state,
      };
  }
};

export default reducer;
