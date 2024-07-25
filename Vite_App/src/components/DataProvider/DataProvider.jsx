import React,{createContext, useReducer} from "react"

export const DataContext = createContext()

export const DataProvider =({children,Reducer,intitalState})=>{
  return (
    <DataContext.Provider  value={useReducer(Reducer,intitalState)}>
      {children}
    </DataContext.Provider>
  )
}
