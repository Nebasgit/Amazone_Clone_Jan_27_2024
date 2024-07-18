import React from 'react'
import {Data} from "../Carousel/img/Data"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from "../Carousel/Carousel.module.css"
import {  } from "module";

function CarouselEffect() {
  return (
    <div>
      <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      >
{Data.map((element,i)=>{
return <img src={element} key={i}/>
})}
</Carousel>
<div className={classes.hero_img}></div>
    </div>

  )
}

export default CarouselEffect