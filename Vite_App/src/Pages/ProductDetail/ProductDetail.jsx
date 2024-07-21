import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css"
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/EndPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'

function ProductDetail() {

  const {productId} = useParams()
  const [products,setProduct]= useState()
  const [isLoading,setIsLoading]=useState()

  useEffect(()=>{
    setIsLoading(true)
axios.get(`${productUrl}/products/${productId}`).then((res)=>{
  setProduct(res.data)
  setIsLoading(false)
}).catch((err)=>{console.log(err)
  setIsLoading(false)
})
  },[])

  return (
    <Layout>
      {isLoading ?(<Loader />) :(<ProductCard product={products} 
      flex={true}
      rederDesc={true}
      />)}
    </Layout>
  )
}

export default ProductDetail