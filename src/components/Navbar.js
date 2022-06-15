import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate();
  const logoutHandeler =()=>{
    sessionStorage.removeItem("user");
    navigate("/");
  }
  return (
    <>
    <div className="navbar navbar-light" style={{display:"flex",backgroundColor:"ButtonShadow"}}> 
  <Link to="/home"> <h2 className='navbar-brand'> Dish-Poll</h2> </Link>
      <Link to="/dishes" style={{textDecoration:"none"}}> <h3 className="navLink">Dishes </h3></Link>
      
      <Link  to="/pollresult" style={{textDecoration:"none"}}><h3 className="navLink">Poll Results</h3>  </Link>

      <button className='btn btn-danger' onClick={logoutHandeler}>Logout</button>
  </div>
  </>
  )
}

export default Navbar;