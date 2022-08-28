import React from 'react';
import { useEffect,useState } from 'react';

const Whatpopular = () => {
    const [popular, setpopular] = useState([]);
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US `)
      .then(res=>res.json())
      .then(data=>setpopular(data.results))

    }, []);
    // console.log(popular);
  return (
    <div className="whatpopular">
      <h1>What's Popular</h1>
      
      <div className="cards">
     
{
    popular.map((e)=>(

        <div className="card">
        
<img src={`https://image.tmdb.org/t/p/original/${e&& e.backdrop_path}`} alt="" />
    </div>
    ))
}
      

    
     
      
      </div>
      
    </div>
  );
}

export default Whatpopular;
