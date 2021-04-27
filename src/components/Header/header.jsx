import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../../asset/images/food.svg";
import cartlogo from "../../asset/images/cart.svg";

const Header = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.left}>
          <Link className={style.brand}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className={style.location}>
            <span>Delhi 1110045</span>
          </div>
        </div>
        <div className={style.middle}>
          <div className={style.search}>
            <form>
              <div className={style.input_box}>
                <input type="text" name="search" placeholder="search for box" />
              </div>
            </form>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.profile}>
            <span>My Account</span>
          </div>
          <div className={style.cart}>
            <img src={cartlogo} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
