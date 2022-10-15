/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Login.css";
import { LoginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
           <img 
             src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
             alt=""/> 
          {/*Spotify logo*/}
          {/* Login with Spotify button*/}
          <a href={LoginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
