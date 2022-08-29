import { NavLink } from "react-router-dom";

function Header(){


    return(
        <div className="Header">
            <h1><NavLink className="Title" to='/'>Tic Tac BOOM!</NavLink></h1>
            <h4 className="Subtitle">Official Website</h4>
        
            <ul className="Nav">
                <li className="nLink"><NavLink className="Color" to='/createUser'>User</NavLink></li>
                <li className="nLink"><NavLink className="Play" to='/play'>Play</NavLink></li>
                <li className="nLink"><NavLink className="Color" to='/team'>Team</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;