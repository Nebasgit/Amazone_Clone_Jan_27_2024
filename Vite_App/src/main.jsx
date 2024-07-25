import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import { intitalState, Reducer } from "./Utility/Reducer"
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <DataProvider 
      Reducer={Reducer} 
      intitalState={intitalState} >
      <App />
      </DataProvider>
   
  </React.StrictMode>,

)

