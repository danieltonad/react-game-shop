import React, { useState } from "react";
import MainHeader from "../Component/MainHeader/MainHeader";
import "./CheckOut.scss";
import logo from "../assets/logo.png";
import coins from "../assets/coins.png";
import delImg from "../assets/bin.png";
import cardImg from "../assets/game1.jpg";

export default function CheckOut({setCheckout, delFromBasket, basket, total}) {
    const basketMap = basket?.map((data, _) => (
        <div key={_} className="basket-list">
          <div className="basket-list-left">
            <img src={data?.image || cardImg} id="basket-left-img" />
          </div>
          <div className="basket-list-middle">
            <span> {data?.title || "Star Wars: Battlefront"} </span>
            <span>
              <img src={coins} id="basket-middle-img" /> &nbsp;{" "}
              {data?.price || "500"} &nbsp; Gil
            </span>
          </div>
          <div className="basket-list-right">
            <span onClick={() => { delFromBasket(data) }}>
              <img src={delImg} id="basket-right-img" />
            </span>
          </div>
        </div>
    ));
  return (
    <div className="checkOut">
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
          <div className="go-back">
            <button onClick={()=>{setCheckout(false)}} >Go Back</button>
          </div>
          {basketMap}
          <div className="basket-total-checkout">
            <span>Total</span>
            <span> {total} Gil</span>
          </div>
        </div>
      </div>
    </div>
  );
}
