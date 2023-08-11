import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";



const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//para conectar con redux devtools de la web

const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store;