import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Signup from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from "./Pages/Results/Results"

function Routing() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={< Landing/>} />
       <Route path="/auth" element={<Signup />}/>
       <Route path="/Payment" element={<Payment />}/>
       <Route path="/Orders" element={< Orders/>}/>
       <Route path="/Cart" element={< Cart/>}/>
       <Route path="/category/:catagoryName" element={< Results/>}/>
      </Routes>
    </Router>
  )
}

export default Routing