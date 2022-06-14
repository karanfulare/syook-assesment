import React, { useState,useEffect } from 'react'
import Navbar from './Navbar';

function Dishes() {

    const [dish,setDish]=useState([]);

    useEffect(() => {
        const getdata = async () => {
          const load = await fetch(`https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`);
          setDish(load);
          console.log(dish);
        }
        getdata();
       
        ;})
      

    
    
    if (!dish) return <div>Loading...</div>;
  return (
    <>
    <Navbar/>
    <div className='container'>
        <h1>Dishes</h1>
                   <div>
                     {dish}
                   </div>

 </div>
 </>
  )
}

export default Dishes;