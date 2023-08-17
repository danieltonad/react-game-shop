import React, {useState, useEffect} from "react";
import "./basket.scss";
import coins from "../../assets/coins.png";
import delImg from "../../assets/bin.png";
import cardImg from "../../assets/game1.jpg";

export default function Basket({ basket, delFromBasket, total, setCheckout }) {
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

  const checkOut = () => {
    if(basket.length > 0){
      setCheckout(true)
    }
  }

  return (
    <div className="basket">
      <div className="basket-title">Basket</div>

      <div className="basket-body">{basketMap}</div>
      <div className="basket-total">
        <span>Total</span>
        <span> {total} Gil</span>
      </div>
      <div className="basket-button">
        <button onClick={checkOut}>Continue</button>
      </div>
    </div>
  );
}
