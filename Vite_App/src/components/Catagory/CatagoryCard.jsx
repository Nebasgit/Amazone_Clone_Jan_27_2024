import React from 'react'
import classes from "./Catagory.module.css";
import {Link} from "react-router-dom"
import { keyframes } from '@emotion/react';

function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <Link to={`/catagory/${data.name}`} key={data.name}>
        <span><h4>{data.title}</h4></span>
        <img src={data.img} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  )
}

export default CatagoryCard