import {Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Play from '../pages/Play';
import Team from '../pages/Team'
import Homepage from '../pages/Homepage';
import CreateUser from '../pages/CreateUser';

function Landing(){

    return(
        <div>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/createUser' element={<CreateUser/>} />
                <Route path='/play' element={<Play/>} />
                <Route path='/team' element={<Team/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>    
        </div>
    )
}

export default Landing;