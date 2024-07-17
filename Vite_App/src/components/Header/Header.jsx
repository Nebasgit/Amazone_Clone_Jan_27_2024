import React from "react";
import { RiMapPinLine } from "react-icons/ri";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <section className="Main_contanier">
      <section className="d-inline-flex">
        <div className="Amazon_logo d-inline-flex">
          <a href="">
            <img 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Icon"
            />
          </a>
          <span><RiMapPinLine /></span>
          <div >
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        <div className="d-inline-flex">
          <select name="" id="">
            <option value="">ALL</option>
          </select >
          <input className="Imput_space" type="text" name="" id="" placeholder="search product" />
        </div>

        <div className="d-inline-flex">
          <div className="Flag">
            <img src="../../../public/icons8-usa-50.png" alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
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
          <a href="/">
            <span className="cart"><LiaCartArrowDownSolid /></span>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Header;
