import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

function CardItem({ path, label, src, text, number }) {
  return (
    <>
      <li className={`card-item card-item--${number}`}>
        <Link className="card-item__link" to={path}>
          <figure className="card-item__pic-wrap" data-category={label}>
            <img src={src} alt="travel" className="card-item__img" />
          </figure>
          <div className="card-item__info">
            <h2 className="card-item__text">{text}</h2>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
