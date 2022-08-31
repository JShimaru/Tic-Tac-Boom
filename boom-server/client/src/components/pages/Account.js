import {NavLink} from 'react-router-dom'

function Account(){

    return(
        <div>
            <h2 className="AccountTitle">Please Log In Below:</h2>
            <button className="LoginBtn"><h3><NavLink to='/login' className="LoginBtn">Login</NavLink></h3></button>
        </div>
    )
}

export default Account