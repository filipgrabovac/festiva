import './App.css';
import 'tachyons';
import React, {useState} from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import HomepagePost from './components/HomepagePost/HomepagePost';

const App = () => {
  const [route, setRoute] = useState('homepage');
  const [loginState, setLoginState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleLogoutClick = (event) => {
    setRoute('login');
    setLoginState(false);
    setName('');
    setEmail('');
  }

  return (
    <div>

      {route === 'homepage' ? 
        <div>
          <Navigation 
            setRoute = {setRoute}
            loginState = {loginState}
            email= {email}
            handleLogoutClick={handleLogoutClick}
          /> 
        </div>
        : route === 'register' ? 
      <Register 
        name = {name}
        email = {email}
        setName = {setName}
        setEmail = {setEmail}
        setRoute = {setRoute}
        setLoginState = {setLoginState}
      />
      : (route === 'login' ?
      <Login 
        setRoute = {setRoute}
        setLoginState = {setLoginState}
        email = {setEmail}
        setEmail = {setEmail}
      /> :
        <HomepagePost /> )
      }

    </div>
  );
}

export default App;
