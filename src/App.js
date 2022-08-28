import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Movie from '../src/Component/Movie'
import People from './People';
import TvShow from './Component/TvShow';

import Nav from './Component/Nav';
import Home from './Component/Home';


const App = () => {
  return (
    <div >
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/movie' element={<Movie/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/tvshow' element={<TvShow/>}/>
     
    </Routes>
      
    </div>
  );
}

export default App;
