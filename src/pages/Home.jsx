import React from 'react';
import House from '../components/House';
import RightPanel from '../components/control/RightPanel';
import BottomControl from '../components/control/BottomControl';
import './page.css';

const Home = (props) => {
  return (
    <div className='home'>
      <div className='house-column'>
        <House />
        <BottomControl />
      </div>
      <RightPanel />
    </div>
  );
};

export default Home;
