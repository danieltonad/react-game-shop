import React, { useState, useContext, useEffect } from "react";
import MainHeader from "../Component/MainHeader/MainHeader";
import "./MainPage.scss";
import Basket from "../Component/Basket";
import logo from "../assets/logo.png";
import Cards from "../Component/Cards";
import ProductContext from "../Context/ProductContext";
export default function MainPage({
  basket,
  setBasket,
  product,
  setProduct,
  checkout,
  setCheckout,
  total,
  setTotal,
  delFromBasket
}) {

  const addToBasket = (item) => {
    item.active = false
    setBasket((prevState) => [...prevState, item])
    setTotal(total + item.price)

  }
  
    

  return (
    <div className="mainPage">
      <div className="left">
        <div sty className="header">
          <MainHeader />
        </div>
        <div className="mainTop">
          <div className="main-logo">
            <img src={logo} id="main-logo" />
          </div>
        </div>
        <div className="mainBottom">
          <div className="cards-pannel">
            {product.map((card, key) => (
              <Cards data={card} key={key} addToBasket={addToBasket}/>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <Basket checkout={checkout} setCheckout={setCheckout} total={total} basket={basket} addToBasket={addToBasket} delFromBasket={delFromBasket} />
      </div>
    </div>
  );
}
