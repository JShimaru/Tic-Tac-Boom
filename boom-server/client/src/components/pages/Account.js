import axios from "axios";
import { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'

function Account(){
    const [currentUser, setCurrentUser]= useState("")

    function logout(){
        setCurrentUser("")
    }

    return(
        <div>
            {currentUser === "" ? <><h2 className="AccountTitle">Please Log In Below:</h2></> : <><h2 className="AccountTitle">Logged in as: {currentUser}</h2></>}
            {currentUser === "" ? <button className="LoginBtn"><h3><NavLink to='/login' className="LoginBtn">Login</NavLink></h3></button> : <><button className="AccountOptions" onClick={logout}><h3>Logout</h3></button>
            <button className="AccountOptions"><h3>Change Username</h3></button>
            <button className="AccountOptions"><h3>Delete User</h3></button></>}
        </div>
    )
}

export default Account