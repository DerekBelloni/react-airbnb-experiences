import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from "./components/Card";

import Data from "./components/Data";


const App = () => {
  console.log('card data', Data)
  const cardData = Data.map((data) => {
    return <Card
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      country={data.location}
      title={data.title}

      price={data.price}
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