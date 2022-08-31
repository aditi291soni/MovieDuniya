import React,{useState,useEffect,useParams} from 'react';
import {Route,Routes} from 'react-router-dom'
import Movie from '../src/Component/Movie'
import People from './People';
import TvShow from './Component/TvShow';

import Nav from './Component/Nav';
import Home from './Component/Home';


const App = () => {


  const [popular, setpopular] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US `)
    .then(res=>res.json())
    .then(data=>setpopular(data.results))

  }, []);
 
  return (
    <div >
    <Nav/>
    <Routes>
    <Route path='/'  element={<Home popular={popular} setpopular={setpopular}/>}/>
      <Route path='/movie' element={<Movie  popular={popular} setpopular={setpopular}/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/tvshow/:id' element={<TvShow popular={popular} setpopular={setpopular}/>}/>
     
    </Routes>
      
    </div>
  );
}

export default App;
