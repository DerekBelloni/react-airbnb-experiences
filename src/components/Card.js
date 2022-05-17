import React from 'react';
import star from '../images/red-star.png';

const Card = (props) => {
  console.log(props)
  let badgeText
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card--body">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={props.data.coverImg} alt="" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="" />
        <span> {props.data.stats.rating} </span>
        <span className="grey">({props.data.stats.reviewCount}) - </span>
        <span className="grey">{props.data.location}</span>
      </div>
      <p>{props.data.title}</p>
      <p><span className="bold">From ${props.data.price}</span>/person</p>
    </div>
  )
}


export default Card;