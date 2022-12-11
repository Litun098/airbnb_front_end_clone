import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.image} className="card--image" />
      <div className="card--stats">
        <img className="star" src="../images/star.png" />
        <span>{props.rating}</span>
        <span className="grey">(6) * </span>
        <span className="gray">{props.country}</span>
        <p>{props.feedback}</p>
        <p>
          <span className="bold">From ${props.price} </span>/ person
        </p>
      </div>
    </div>
  );
}
