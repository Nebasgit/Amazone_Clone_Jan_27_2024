import React from 'react'
import {CatagoryImages} from "./CatagoryImages";
import CatagoryCard from './CatagoryCard';
import classes from "./Catagory.module.css";


function Catagory() {
  return (
    <div className={classes.catagory_container}>
{
CatagoryImages.map((elements,i)=>{
  return(
<CatagoryCard data={elements} />
  
  )
})
}
    </div>
  )
}

export default Catagory