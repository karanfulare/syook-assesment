import React, { useState,useEffect } from 'react'
import Navbar from './Navbar';
import { getdishes,votedish,sortOnVoteBasis } from '../redux/features/DishSlice';
import {useDispatch,useSelector} from 'react-redux'

function Dishes() {

    const data = useSelector(state => state.dish)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getdishes());
       },[])

       const voteHandeler = (id,name)=>{
        //console.log(id)
        dispatch(votedish(id,name));
        dispatch(sortOnVoteBasis);
       }
 
  return (
    <>
    <Navbar/>

    <div className='container' >
        <h1>Dishes</h1>
                   {data.loading && <div>Loading...</div>}
      {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
      {!data.loading && data.dishlist.length ? (
        <div style={{display:"flex",flexDirection:"row",flexFlow:"wrap"}}>
          {data.dishlist.map((item)=>{
            return  <div key={item.id} > 
            <div className="card" style={{width:"18rem",margin:"10px"}}>
                   <img className="card-img-top" src={item.image} alt={item.dishName} />
                     <div className="card-body">
                       <h5 className="card-title"> {item.dishName}</h5>
                    <p className="card-text"> {item.description}</p>
                   <button  className="btn btn-primary" onClick={()=>voteHandeler(item.id,item.dishName)}> Vote </button>
           </div>
           </div>
           </div>
          })}
        </div>
      ) : null}

 </div>
 </>
  )
}

export default Dishes;