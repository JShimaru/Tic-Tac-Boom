import './App.css';
import { useState } from 'react';
import { currentUser } from './components/UserContext';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <currentUser.Provider value={{user,setUser}}>
      <Header />
      <Landing />
      <Footer />
      </currentUser.Provider>
    </div>
  );
}

export default App;
