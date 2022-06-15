import { useEffect, useState } from "react"
import React from 'react'
import Data from '../assests/users.json'
import { useNavigate } from "react-router-dom"

function UserLogin() {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const data = Data;
    const navigate = useNavigate();
    console.log(data);

    const nameHandeler=(e)=>{
        setName(e.currentTarget.value);
    }

    const passwordHandeler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const submitHandeler =()=>{
        var finduser = data.filter(
            (item)=>item.username===name && item.password === password
        );
        if(finduser.length > 0){
            sessionStorage.setItem("user",name);
            navigate("/home");
        }
        else {
            alert("Invalid Username Password")
        }
    }



  return (
    <div className="container" id="loginform" >
    <form className="mt-4">
    <input type="text" className="form-control " placeholder="Enter name" onChange={(e)=> nameHandeler(e)}/>
   
    <input type="password" className="form-control mt-2" onChange={(e)=>passwordHandeler(e)} placeholder="Password"/>
    <br/>
    <button 
     className="btn btn-primary"
     onClick={submitHandeler}
    >Login</button>
    </form>
    </div>
  )
}

export default UserLogin;