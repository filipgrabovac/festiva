import './App.css';
import 'tachyons';
import React, {useState} from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';


const App = () => {
  const [route, setRoute] = useState('homepage');
  const [loginState, setLoginState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <div>

      {route === 'homepage' ? 
        <div>
          <Navigation 
            setRoute={setRoute}
            loginState={loginState}
            name= {name}
          /> 
        </div>
        : route === 'register' ? 

      <Register 
        name = {name}
        email = {email}
        setName = {setName}
        setEmail = {setEmail}
        setRoute={setRoute}
        setLoginState= {setLoginState}
      />
      :
      <Login 
        setRoute={setRoute}
        setLoginState={setLoginState}
      />
      }

    </div>
  );
}

export default App;
