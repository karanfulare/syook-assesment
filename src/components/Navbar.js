import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-light" style={{display:"flex"}}> 
   <h2 className='navbar-brand'>Dish-Poll</h2> 
      <Link to="/dishes" style={{textDecoration:"none"}}> <h3 className="navLink">Dishes </h3></Link>
      
      <Link  to="/pollresult" style={{textDecoration:"none"}}><h3 className="navLink">Poll Results</h3>  </Link>
      
    
  </div>
  </>
  )
}

export default Navbar;