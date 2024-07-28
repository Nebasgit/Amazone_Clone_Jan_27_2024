import React, { useContext, useState } from 'react'
import LayOut from "../../components/Layout/Layout"
import classes from "./Payment.module.css"
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../API/axios'
import {RingLoader} from "react-spinners"
import  {db}  from '../../Utility/FireBase' 
import { useNavigate } from 'react-router-dom'
import {Type} from '../../Utility/ActionType'

function Payment() {

  const [{user,basket},dispatch]=useContext(DataContext)
  // console.log(user);

  const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
  },0)

  const total = basket?.reduce((amount,item)=>{
    return item?.price * item?.amount + amount
    },0)

  const [processing, setProcessing]=useState(false)
  const [cardError,setCardError]=useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const navigate=useNavigate();

  const handleChange=(e)=>{
e?.error?.message? setCardError(e?.error?.message):setCardError("")
  }

  const handlePayment = async (e)=>{
    e.preventDefault()
    try{
      setProcessing(true)
      // Step1  contact Backend || function 

      const response = await axiosInstance({
        method:"post",
        url:`/payment/create?total=${total*100}`
      })
// console.log(response.data);

const clientSecret=response.data?.clientSecret;
// Step 2 clinet side (react side) confirmation
const {paymentIntent} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method:{
      card:elements.getElement(CardElement),
    }
  }
)
// console.log(paymentIntent);

// Step 3 After confirmation --> order firestore database save , clear basket
await db
.collection("users")
.doc(user.uid)
.collection("orders")
.doc(paymentIntent.id)
.set({
  basket: basket,
  amount:paymentIntent.amount,
  created:paymentIntent.created,
})
dispatch({Type:Type.EMPTY_BASKET})

// console.log(paymentIntent);
setProcessing(false)
navigate("/Orders",{state:{msg:"You have placed a new order"}})
    }catch(error){
      console.log(error);
      setProcessing(false)
    }

  }
  return (
    <LayOut>
{/* Header  */}
<div className={classes.payment_header}>
  Checkout ({totalItem}) items
</div>
{/* Payment method  */}
<section className={classes.payment}></section>
{/* Address  */}
<div className={classes.flex}>
  <h3>Delivery Address</h3>
  <div>
    <div>{user?.email}</div>
    <div>123 React Lane</div>
    <div>Chicago IL</div>
  </div>
</div>
<hr />
{/* Product  */}
<div className={classes.flex}>
<h3>Review items and delivery</h3>
<div>
  {
    basket?.map((item)=>(<ProductCard product={item} flex={true} />)
  )}
</div>
</div>
<hr />
{/* Card form   */}
<div className={classes.flex}>
<h3>Payment methods</h3>
<div className={classes.payment_card_container}>
  < div className={classes.payment_details}>
<form onSubmit={handlePayment}
action="">
  {/* error  */}
  {cardError && <small style={{color:"red"}}>{cardError}</small>}
  {/* card element  */}
<CardElement onChange={handleChange} />
{/* price  */}
<div className={classes.payment_price}>
  <div>
    <span style={{display:"flex",gap:"10px"}}>
      <p>Total Order </p> <CurrencyFormat amount={total}/>
    </span>
    </div>
    <button type='Submit' >
    {processing ? (
      <div className={classes.loading}>
        <RingLoader
  color="orange"
  size={12}
/>)
<p> Please wait ...</p>
      </div>
     )  :("Pay Now") }
    </button>
</div>
</form>
</div>
</div>
</div>
<hr />
{/* Header  */}


    </LayOut>
  )
}

export default Payment