import React from "react";
import './Card.css'
function Card({data}) {
  return (
    <div className="main">
      {data.map((e) => (
        <div className="card" key={Math.random()}>
          <img src={e.img} alt="" />
          <h2>{e.title}</h2>
          <span>${e.price}</span>
          <button>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
