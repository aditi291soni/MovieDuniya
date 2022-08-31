import React from 'react';
import {Link} from 'react-router-dom'
import './Style.css'

const Nav = () => {
  return (
    <>
      <div className="nav">
<div className="leftnav">
<div className="logo">TMDB <div className="class"></div></div>
<Link to='/'>Home</Link>
  <Link to='/movie'>Movies</Link>
  <Link to='/tvshow/:id'>TV shows</Link>
  <Link to='/people'>People</Link>
 
</div>
<div className="rightnav">
    {/* <i class="ri-add-line"></i> */}
</div>
      </div>
    </>
  );
}

export default Nav;
