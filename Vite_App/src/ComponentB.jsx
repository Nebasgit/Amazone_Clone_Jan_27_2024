import React from 'react'
import {useColor} from './ContextProvider'
import "./assets/style.css"
function ComponentB() {
  const {color}=useColor()
  return (
    <div className={color}>
  <h1>Component B</h1>
  <h1>Color is {color}</h1>
    </div>
  )
}

export default ComponentB