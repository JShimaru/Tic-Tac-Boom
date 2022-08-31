import { NavLink } from 'react-router-dom';
import image from '../../images/ttbd.jpg'

function Homepage(){
    return(
        <div id="Home">
            <h1>Welcome!</h1>
            <h6 className='Start'>Click login to sign up or play to hop in the action!</h6>
            <NavLink to='/play'><img src={image} alt='Tic Tac Boom Loading Screen' height={250} width={185}/></NavLink>
        </div>
    )
}

export default Homepage;