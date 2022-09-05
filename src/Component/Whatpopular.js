import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Whatpopular = ({popular,setpopular}) => {
      const navigate=useNavigate()
    const idHandler=(i)=>{
            navigate(`/movie/${i}`)
    }
  return (
    <div className="whatpopular">
      <h1>What's Popular</h1>
      
      <div className="cards">
     
{
    popular.map((e,i)=>(

        <div key={i} onClick={()=>idHandler(e.id)} className="card">
      
        
<img src={`https://image.tmdb.org/t/p/original/${e&& e.backdrop_path}`} alt="" />
    </div>
    ))
}
      

    
     
      
      </div>
      
    </div>
  );
}

export default Whatpopular;
