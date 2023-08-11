/* eslint-disable react/no-deprecated */
import App from './App'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom'
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  </Provider>,
  document.getElementById('root')
  
  )
  