import React,{useState,useEffect} from 'react';

import '../Component/Style.css'

const Movie = () => {
    const [populars, setpopulars] = useState([]);
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US `)
      .then(res=>res.json())
      .then(data=>setpopulars(data.results))

    }, []);
    console.log(populars);
  return (
    <div className='movie'>
      

 
      <div className="cards">
     
{
    populars.map((e)=>(

        <div className="card">
        
        <img src={`https://image.tmdb.org/t/p/original/${e&& e.backdrop_path}`} alt="" />
        <h2>{e.title}</h2>
    </div>
    ))
}
    
    </div>
    </div>
  );
}

export default Movie;
