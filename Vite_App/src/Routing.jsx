import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from "./Pages/Results/Results"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"

function Routing() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={< Landing/>} />
       <Route path="/auth" element={<Auth />}/>
       <Route path="/Payment" element={<Payment />}/>
       <Route path="/Orders" element={< Orders/>}/>
       <Route path="/Cart" element={< Cart/>}/>
       <Route path="/catAgory/:catagoryName" element={< Results/>}/>
       <Route path="/products/:productId" element={< ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default Routing