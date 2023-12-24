import './App.css';
import 'tachyons';
import React, {useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

// layouts
import Layout from './components/Layout/Layout';

// components
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Profile  from './components/Profile/Profile';
import AboutPage from './components/AboutPage/AboutPage'
import Posts from './components/Posts/Posts.js';
import Post from './components/Post/Post.js';

const App = () => {
  sessionStorage.setItem('loginState', false);
  sessionStorage.setItem('userEmail', '');
  const [loginState, setLoginState] = useState(false);
  // raditi sa fetchevima iz baze a ne kao kopije stateova!!
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>      
        <Route index element={
          <>
            <Navigation loginState={loginState} setLoginState={setLoginState}/>
            <About />
            <Posts />
          </>
          }/>
        <Route path = '/register' element={<Register setLoginState={setLoginState}/>} />
        <Route path = '/login' element={<Login setLoginState={setLoginState}/>}/>
        <Route path = '/profile' element={
          <>
            <Profile />
          </>

          }/>
        <Route path = '/about' element = {
          <div className='flex flex-column'>
            <Navigation loginState={loginState} setLoginState={setLoginState}/>
            <AboutPage />
          </div>
        }/>
      </Route>
  
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;