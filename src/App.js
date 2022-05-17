import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from "./components/Card";
import swimmer from './images/swimmer.png'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img={swimmer}
        rating="5.0"
        reviewCount="(6)"
        country="Italy"
        title="Life Lesson with Katie Zaferes"
        price={136}
      />
    </>
  )
}

export default App;