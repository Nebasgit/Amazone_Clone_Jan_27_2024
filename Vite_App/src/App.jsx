import React, { useContext, useEffect, useState }  from 'react'
import Routing from './Routing'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import {ThemeProvider} from './ContextProvider'
import { auth } from './Utility/FireBase'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './Utility/ActionType'




function App() {
  const [{user},dispatch]=useContext(DataContext)
  useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{

  if (authUser){
    // console.log(authUser)
      dispatch({
        Type:Type.SET_USER,
        user:authUser
      })
  }
  else{
    dispatch({
      type:Type.SET_USER,
      user:null,
    })
  }
})

  },[])

  return (
  
    
    <ThemeProvider>
    <Routing/>
    </ThemeProvider>
 

  )
}

export default App
