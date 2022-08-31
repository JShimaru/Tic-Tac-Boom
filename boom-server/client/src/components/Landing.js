import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Play from './pages/Play';
import Team from './pages/Team'
import Homepage from './pages/Homepage';
import CreateUser from './pages/CreateUser';
import Account from './pages/Account';

function Landing(){

    return(
        <div>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/login' element={<Login/>} state="setCurrentUser"/>
                <Route path='/createUser' element={<CreateUser/>} />
                <Route path='/play' element={<Play/>} />
                <Route path='/team' element={<Team/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/account/:user' element={<Account/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>    
        </div>
    )
}

export default Landing;