import { useContext } from "react";
import { currentUser } from "./UserContext";
import { NavLink } from "react-router-dom";

function Header(){

    const {user, setUser} = useContext(currentUser)

    return(
        <div className="Header">
            <h1><NavLink className="Title" to='/'>Tic Tac BOOM!</NavLink></h1>
            <h4 className="Subtitle">Official Website</h4>
        
            <ul className="Nav">
                <li className="nLink"><NavLink className="Color" to='/createUser'>User</NavLink></li>
                <li className="nLink"><NavLink className="Play" to='/play'>Play</NavLink></li>
                <li className="nLink"><NavLink className="Color" to='/team'>Team</NavLink></li>
            </ul>
            {/* {user === null ? <><NavLink className="Account" to='/account'>Login</NavLink></> :
            <><NavLink className="Account" to='/account/:user'>Account</NavLink>
            <NavLink className="Account" to='/' onClick={()=> setUser(null)}>Logout</NavLink></>} */}
        </div>
    )
}

export default Header;