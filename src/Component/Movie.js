import React,{useState,useEffect} from 'react';

import '../Component/Style.css'

const Movie = ({popular,setpopular}) => {
  return (
    <div className='movie'>
      

 
      <div className="cards">
     
{
    popular.map((e,i)=>(

        <div key={i} className="card">
        
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
