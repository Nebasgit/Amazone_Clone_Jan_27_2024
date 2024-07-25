import React,{ useState,createContext, useContext } from "react"

const ColorContext = createContext()

 export const useColor =()=> {
  return useContext(ColorContext)
}

export const ThemeProvider=({children})=>{
const [color,setColor]=useState('light')

const colorToggler =()=>{
  setColor((pre)=>pre==='light' ? 'dark' : 'light')
}
return (
<ColorContext.Provider value={{color,colorToggler}}>
{children}
</ColorContext.Provider>
  )
}