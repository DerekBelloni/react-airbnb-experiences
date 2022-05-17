import React from 'react';
import swimmerImg from '../images/swimmer.png';
import star from '../images/red-star.png';

const Card = (props) => {
  console.log(props)
  return (
    <div className="card--body">
      <img className="card--img" src={props.img} alt="" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="" />
        <span>{props.rating} </span>
        <span className="grey">{props.reviewCount} - </span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>/person</p>
    </div>
  )
}


export default Card;