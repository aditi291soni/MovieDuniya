import React, { useState, useEffect, useParams } from 'react';
import { Route, Routes } from 'react-router-dom'
import Movie from '../src/Component/Movie'
import TvShow from './Component/TvShow';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Single from './Single';
import Tvsingle from './Component/Tvsingle';


const App = () => {
  const [popular, setpopular] = useState([]);
  const [tvshows, settvshows] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US `)
      .then(res => res.json())
      .then(data => setpopular(data.results))

  }, []);

  return (
    <div >
      <Nav />
      <Routes>
        <Route path='/' element={<Home popular={popular} setpopular={setpopular} />} />
        <Route path='/movie' element={<Movie popular={popular} setpopular={setpopular} />} />
        <Route path='/tvshow' element={<TvShow tvshows={tvshows} settvshows={settvshows} />} />
        <Route path='/tvshow/:id' element={<Tvsingle tvshows={tvshows} settvshows={settvshows} />} />
        <Route path='/movie/:id' element={<Single popular={popular} setpopular={setpopular} />} />

      </Routes>

    </div>
  );
}

export default App;
