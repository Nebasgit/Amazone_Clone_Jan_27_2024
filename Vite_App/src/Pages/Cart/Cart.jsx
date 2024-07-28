import React, { useContext,useReducer } from 'react'
import Layout from "../../components/Layout/Layout"
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from "./Cart.module.css"
import { Type } from '../../Utility/ActionType'
import { IoIosArrowDown } from "react-icons/io"; // <IoIosArrowDown />
import { IoIosArrowUp } from "react-icons/io"; // <IoIosArrowUp />

function Cart() {
const[{basket,user},dispatch]= useContext(DataContext);

const total = basket?.reduce((amount,item)=>{
return item?.price * item?.amount + amount
},0)

const increment =(item)=>{
  dispatch({
    Type:Type.ADD_TO_BASKET,
    item
  })
}

const decrement =(id)=>{
  dispatch({
    Type:Type.REMOVE_FROM_BASKET,
    id
  })
}
  return (
 <Layout>
<section className={classes.container}>
  <div className={classes.cart_container}>
    <h2>   Hello </h2>
    <h3> Your shopping cart</h3>
    <hr />
    {
      basket?.length==0?(<p>Opps ! No item in your cart</p>):(
        basket?.map((item,i)=> {
          return <section  key={i} className={classes.cart_product}>
          <ProductCard
         
          product={item}
          rederDesc={true}
          renderAdd={false}
          flex={true}         
          />
          <div className={classes.btn_container}>
<button className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp size={20}/></button>
<span>{item?.amount}

</span>
<button className={classes.btn} onClick={()=>decrement(item?.id)}><IoIosArrowDown size={20} /></button>
          </div>
          </section>
        })
      )
    }
  </div>

  {  
        basket?.length !=0 && (
    <div className={classes.subtotal}>
<div >
  <p>Subtotal ({basket?.length} items )</p>
  <CurrencyFormat amount={total}/>
</div>
<span>
  <input type="checkbox" />
  <small> This order contains a gift</small>
</span>
<Link to="/Payment" > Continue to checkout</Link>
  </div>
)}

</section>
 </Layout>
  )
}

export default Cart