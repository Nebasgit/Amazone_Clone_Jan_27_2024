import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from "./Results.module.css"
import {useParams} from "react-router-dom"
import axios from "axios"
import { productUrl } from '../../API/EndPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'



function Results() {
  const[results,setResutls]=useState([])
  const [isLoading, setIsLoading] =useState()
const {catagoryName}=useParams()
useEffect(()=>{
  axios.get(`${productUrl}/products/category/${catagoryName}`).then((res)=>{
    setResutls(res.data)
  })
  .catch((err)=>{console.log(err);})
},[catagoryName])

  return (
    <Layout>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p  style={{padding:"30px"}}>category/{catagoryName}</p>
        <hr />
        {isLoading ? (<Loader/>):(
        <div className={classes.products_container}>
          {
            results?.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
        )}
      </section>
    </Layout>

    
  )
}

export default Results