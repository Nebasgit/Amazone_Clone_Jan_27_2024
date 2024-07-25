import React from 'react'
import { useColor } from './ContextProvider'
function ComponentA() {
const{colorToggler}=useColor()

  return (
    <div>
<button onClick={colorToggler}>Color Toggler</button>
    </div>
  )
}

export default ComponentA