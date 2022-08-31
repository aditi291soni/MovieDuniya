import React from 'react';
import Whatpopular from './Whatpopular';
import Top from './Top'

const Home = ({popular,setpopular}) => {
  return (
    <div>
      
      <Top/>
      <Whatpopular popular={popular} setpopular={setpopular}/>
    </div>
  );
}

export default Home;
