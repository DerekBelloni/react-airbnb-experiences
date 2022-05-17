import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from "./components/Card";

import Data from "./components/Data";


const App = () => {
  const cardData = Data.map((data) => {
    return <Card
      key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      country={data.location}
      title={data.title}
      price={data.price}
      openSpots={data.openSpots}
    />
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardData}
      </section>
    </>
  )
}


export default App;