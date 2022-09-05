import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import '../Component/Style.css'



const TvShow = ({tvshows, settvshows}) => {
  // const [tvshows, settvshows] = useState([]);

  const nav=useNavigate();
  const idsH=(i)=>{
nav(`/TvShow/${i}`)
  }
  const a=()=>{
    const b = axios.get("https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US ")
    .then(res=>settvshows(res.data.results))
    // .then(settvshows(b))
   }
   a()
  return (
    <div className='movie'>
      

 
      <div className="cards">
     
{
    tvshows.map((e,i)=>(

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

export default  TvShow;