import React from "react";
import CardItem from "../CardItem";

import "./styles.scss";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards__title">Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../../assets/images/img-1.jpeg")}
              text="Hike on glaciers, visit crystal ice caves, experience the Northern Lights on Iceland"
              label="Adventure"
              path="/services"
              number="1"
            />
            <CardItem
              src={require("../../assets/images/img-2.jpeg")}
              text="Riding in a hot air balloon over Cappadocia, Turkey"
              label="Adventure"
              path="/services"
              number="2"
            />
            <CardItem
              src={require("../../assets/images/img-3.jpeg")}
              text="Visit Dracula&#39;s castle in Romania"
              label="Mystery"
              path="/services"
              number="3"
            />
            <CardItem
              src={require("../../assets/images/img-4.jpeg")}
              text="Travel to the Islands of Bali in a private cruise"
              label="Luxury"
              path="/services"
              number="4"
            />
            <CardItem
              src={require("../../assets/images/img-5.jpeg")}
              text="Scuba diving with sharks in Phillipines"
              label="Adrenaline"
              path="/services"
              number="5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
