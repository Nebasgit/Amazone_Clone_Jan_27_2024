import React from "react";
import { RiMapPinLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
    <section >
    <div className={classes.header_container}>
        <div className={classes.log_container}>
          <a href="">
            <img 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Icon"
            />
          </a>
          <div className={classes.delivery}>
          <span><RiMapPinLine /></span>
          <div >
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
          </div>
        </div>

        <div className={classes.search}>
          <select name="" id="">
            <option value="">ALL</option>
          </select >
          <input  type="text" name="" id="" placeholder="search product" />
          <BsSearch size={45}/>
        </div>

        <div className={classes.order_container} >
          <a  href="" className={classes.language}>
            <img src="../../../public/icons8-usa-50.png" alt="flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          <a href="">
            <div>
              <p>Sign in </p>
              <span>Account & Lists</span>
            </div>
          </a>

          <a href="">
            <p>Returns </p>
            <span>& Orders</span>
          </a>
          <a href="/" className={classes.cart}>
          <BiCart size={35} />
            <span >0</span>
          </a>
        </div>
     
    </div>
     </section>
     < LowerHeader/>
    </>
  );
}

export default Header;
