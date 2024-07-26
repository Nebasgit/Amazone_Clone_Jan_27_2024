import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from "./Pages/Results/Results"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectRoute from "./components/ProtectRoute"

const stripePromise = loadStripe('pk_test_51PgTQo2KG1PE6bTJIXIiaqdpt2HuHZIMr01aUyaxqYql4Hs7QTTJSsYO0vLvkiLxEgln1V3htVeOamz9AmETsrFe00Oet0yXk5');

function Routing() {


  return (
    <Router>
      <Routes>
       <Route path="/" element={< Landing/>} />
       <Route path="/auth" element={<Auth />}/>
       <Route path="/Payment" 
       element={
        <ProtectRoute msg={"you must log in to pay"} redirect={"/Payment"}>
      <Elements  stripe={stripePromise}> 
      <Payment />
      </Elements>
      </ProtectRoute>
       }
       />
       <Route path="/Orders" element={< Orders/>}/>
       <Route path="/Cart" element={< Cart/>}/>
       <Route path="/catAgory/:catagoryName" element={< Results/>}/>
       <Route path="/products/:productId" element={< ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default Routing