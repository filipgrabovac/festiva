import './App.css';
import 'tachyons';
import React, {useState} from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const [route, setRoute] = useState('');
  // const [loginState, setLoginState] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <div>

      {route === 'homepage' ? 
        <div>
          <Navigation 
            setRoute={setRoute}
          /> 
        </div>
        :
      <Register 
        name = {name}
        email = {email}
        setName = {setName}
        setEmail = {setEmail}
        setRoute={setRoute}
      />
      }

    </div>
  );
}

export default App;
