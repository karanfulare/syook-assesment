import React, { useState,useEffect } from 'react'
import Navbar from './Navbar';
import { getdishes } from '../redux/features/DishSlice';
import {useDispatch,useSelector} from 'react-redux'

function Dishes() {

    const data = useSelector(state => state.dish)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getdishes());
       },[])
 
  return (
    <>
    <Navbar/>

    <div className='container'>
        <h1>Dishes</h1>
                   {data.loading && <div>Loading...</div>}
      {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
      {!data.loading && data.dishlist.length ? (
        <ul>
          {data.dishlist.map((item)=>{
            return <div>{item.id} {item.dishName}</div>
          })}
        </ul>
      ) : null}

 </div>
 </>
  )
}

export default Dishes;