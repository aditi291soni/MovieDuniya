import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import '../Component/Style.css'

const Movie = ({popular,setpopular}) => {
  const nav=useNavigate();
  const idsH=(i)=>{
nav(`/movie/${i}`)
  }
  return (
    <div className='movie'>
      

 
      <div className="cards">
     
{
    popular.map((e,i)=>(

        <div key={i} onClick={()=>idsH(e.id)} className="card">
        
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
