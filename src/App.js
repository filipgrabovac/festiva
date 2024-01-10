import './App.css';
import 'tachyons';
import React, {useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// layouts
import Layout from './components/Layout/Layout';

// components
import Navigation from './components/Navigation/Navigation';

import Login from './components/Login/Login';
import Register from './components/Register/Register';

import About from './components/About/About';
import Profile  from './components/Profile/Profile';
import AboutPage from './components/AboutPage/AboutPage'

import PersonalPosts from './components/PersonalPosts/PersonalPosts.js';
import ProfileDetails from './components/ProfileDetails/ProfileDetails.js';

import Post from './components/Post/Post.js';
import Posts from './components/Posts/Posts.js';
import CreatePost from './components/CreatePost/CreatePost.js';

// 404 page
import NotFound from './components/NotFound/NotFound.js';

const App = () => {
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
          
        <Route path = 'register' element={<Register setLoginState={setLoginState}/>} />
        
        <Route path = 'login' element={<Login setLoginState={setLoginState}/>}/>

        <Route path = 'profile' element={<Profile />} >
          <Route index element = {<ProfileDetails />} />
          <Route path = 'posts' element={<PersonalPosts />}/>
          <Route path ='closeAccount' />
        </Route>

        <Route path = 'about' element = {
          
          <div className = 'flex flex-column'>
            <Navigation loginState={loginState} setLoginState={setLoginState}/>
            <AboutPage />
          </div>
        }/>

        <Route path = ':post' element={
          <>
            <Post />
          </>} />
        
        <Route path = 'createPost' element={<CreatePost />} />
        
        <Route path = '*' element={<NotFound />} />
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


// when creating a custom 404 page the route should be *
// if the current route does not exist it displays the NotFound component 