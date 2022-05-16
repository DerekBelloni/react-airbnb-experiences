import React from 'react';
import swimmerImg from '../images/swimmer.png';
import star from '../images/red-star.png';

const Card = () => {
  return (
    <div className="card--body">
      <img className="card--img" src={swimmerImg} alt="" />
      <div>
        <img className="card--star" src={star} alt="" />
        <p>5.0 (6)-USA</p>
        <p>Life lessons with Katie Zefares</p>
        <p><b>From $136</b>/person</p>
      </div>
    </div>
  )
}

export default Card;