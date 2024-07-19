import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css"
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/EndPoints'
import ProductCard from '../../components/Product/ProductCard'

function ProductDetail() {

  const {productId} = useParams()
  const [products,setProduct]= useState()
  const [isLoading,setIsLoading]=useState()

  useEffect(()=>{
    isLoading(true)
axios.get(`${productUrl}/products/${productId}`).then((res)=>{
  setProduct(res.data)
  isLoading(false)
}).catch((err)=>{console.log(err)
  isLoading(false)
})
  },[])

  return (
    <Layout>
      {isLoading ?(<Loader />) :(<ProductCard product={products}/>)}
    </Layout>
  )
}

export default ProductDetail