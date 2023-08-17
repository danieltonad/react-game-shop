import React, { useState } from "react";
import "./cards.scss";
import controlerImg from "../../assets/controller.png";
import coins from "../../assets/coins.png";
import cardImg from "../../assets/game1.jpg";

export default function Cards({ data, addToBasket }) {
  return (
    <div className="cards">
      {!data?.active && <div className="card-disable"></div>}

      <div className="controller-img">
        <img src={controlerImg} id="controller-img" />
      </div>
      <div className="cards-content">
        <div className="card-img">
          <img src={data?.image || cardImg} id="card-img" />
        </div>

        <div className="cards-content-right">
          <div className="card-title">
            {data.title || "Star Wars: Battlefront"}
          </div>
          <div className="card-text">
            {data?.description ||
              "Immerse yourself in the ultimate Star Wars experience."}
          </div>
          <div className="card-price">
            <img src={coins} id="coins-img" />
            {data?.price || "300"} Gil
          </div>
          <div className="card-button">
            <button
              onClick={() => {
                addToBasket(data);
              }}
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
