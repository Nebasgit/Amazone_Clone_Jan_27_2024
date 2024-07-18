import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"
function LowerHeader() {
  return (
    <div className={classes.lower_container }>
      <ul>
        <li><AiOutlineMenu size={30}/><p>ALL</p> </li>
        <li>Today's Deals</li>
        <li>Groceries</li>
        <li>Best Sellers</li>
        <li>Amazon Basics</li>
        <li>New Releases</li>
        <li>Music</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Books</li>
        <li>Pharmacy</li>
        <li>Gift Cards</li>
      </ul>
    </div>
  )
}

export default LowerHeader