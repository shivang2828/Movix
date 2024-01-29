import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from "./trending/Trending"
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


HeroBanner;

function Home() {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated/>
      <div style={{height: 50}}></div>
    </div>
  );
}

export default Home