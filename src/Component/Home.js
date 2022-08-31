import React from 'react';
import Whatpopular from './Whatpopular';

const Home = ({popular,setpopular}) => {
  return (
    <div>
      
      <Top/>
      <Whatpopular popular={popular} setpopular={setpopular}/>
    </div>
  );
}

export default Home;
