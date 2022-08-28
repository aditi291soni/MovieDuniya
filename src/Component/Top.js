import React from 'react';
import '../Component/Style.css'


const Top = () => {
  return (
    <div>
      <div className="top">

<h1 >Welcome </h1><br />
<h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
 <form className='form' action="">
  
 <input type="text" placeholder='Search for movie,tv show,person' />
 <button className='search'>Search</button>
 </form>
      </div>
    </div>
  );
}

export default Top;
