import React, { useContext } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsSearch} from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import {Link} from "react-router-dom"
import {DataContext} from "../DataProvider/DataProvider";
import { auth } from "../../Utility/FireBase";

function Header() {
const [{user,basket},dispatch]=useContext(DataContext)

const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
  },0)

  return (
    <section className={classes.fixed}>
    <section >
    <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Icon"
            />
          </Link>
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
          <Link  href="" className={classes.language}>
            <img src="../../../public/icons8-usa-50.png" alt="flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to={!user && "/auth"}>
            <div>
              {user?(
                <>
                <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                 ) :(
                  <>
              <p>Sign in </p>
              <span>Account & Lists</span>
              </>
              )}
              </div>
              
            
          </Link>

          <Link to="/Orders">
            <p>Returns </p>
            <span>& Orders</span>
          </Link>
          <Link to="/Cart" className={classes.cart}>
          <BiCart size={35} />
            <span >{basket.length}</span>
          </Link>
        </div>
     
    </div>
     </section>
     < LowerHeader/>
    </section>
  );
}

export default Header;
