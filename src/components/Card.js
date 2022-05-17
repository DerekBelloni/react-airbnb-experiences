import React from 'react';
import star from '../images/red-star.png';

const Card = (props) => {
  console.log('[Open Spots]', props.openSpots)
  return (
    <div className="card--body">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img className="card--img" src={props.img} alt="" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="" />
        <span> {props.rating} </span>
        <span className="grey">({props.reviewCount}) - </span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>/person</p>
    </div>
  )
}


export default Card;