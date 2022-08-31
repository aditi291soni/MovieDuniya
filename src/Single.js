import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import { useParams } from 'react-router-dom';
import '../src/Component/Style.css'

const Single = ({popular,setpopular}) => {
  // console.log(popular.title);
  console.log(popular);
  let { id } = useParams();
  // console.log(id);
  
      
  
  return (
    <div className="single">
    {
      popular.map((elem)=>{

if(elem.id==id){
  return <>

  <div className="img">
      <img src={`https://image.tmdb.org/t/p/original/${elem&& elem.backdrop_path}`} alt="" />
      </div>
      <div className="task">
 
      <h2>Title <br />{elem.title}</h2> <br />
        
        <h2>Original title <br />{elem.original_title}</h2> <br />
        <h2>Release Date <br /> {elem.release_date}</h2> <br />
        <h2>Language <br /> {elem.original_language}</h2> <br />
        <h3>Overview <br />{elem.overview}</h3>
      </div>
</>
}


      })
    }
        </div>
  )
}

export default Single
