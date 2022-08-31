import { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'

function Account(){
    const [currentUser, setCurrentUser]= useState("")

    const {id}= useParams()

    useEffect(()=>{
        if(id){
            setCurrentUser(id)
        }
    },[])



    return(
        <div>
            <h2 className="AccountTitle">Logged in as: {currentUser}</h2>
            <button className="AccountOptions"><h3><NavLink to='/account' className='LoginBtn'>Logout</NavLink></h3></button>
            <button className="AccountOptions"><h3>Change Username</h3></button>
            <button className="AccountOptions"><h3>Delete User</h3></button>
        </div>
    )
}

export default Account