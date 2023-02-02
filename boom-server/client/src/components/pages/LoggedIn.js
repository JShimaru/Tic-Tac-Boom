import { useContext, useEffect } from "react";
import { currentUser } from "../UserContext";
import {NavLink, useParams} from 'react-router-dom'

function Account(){
    const {user, setUser} = useContext(currentUser)

    const {id}= useParams()

    useEffect(()=>{
        if(id !== "{user}"){
            setUser(id)
        }
    },[])



    return(
        <div>
            <h2 className="AccountTitle">Logged in as: {user}</h2>
            <button className="AccountOptions" onClick={()=>setUser(null)}><h3><NavLink to='/' className='LoginBtn'>Logout</NavLink></h3></button>
            <button className="AccountOptions"><h3>Change Username</h3></button>
            <button className="AccountOptions"><h3>Delete User</h3></button>
        </div>
    )
}

export default Account