import React from 'react';

import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header';

const Home = () => {
  const page = (
    <div>
      <Header />
      <Slider />
    </div>
  );
  return page;
};

export default Home;
