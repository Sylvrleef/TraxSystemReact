import React from 'react';
import ReactDOM from 'react-dom';

import UsernameInput from './components/UsernameInput';
import PasswordInput from './components/PasswordInput';
import ResetPassword from './components/ResetPassword';
import RequestAccess from './components/RequestAccess';
import Navbar from './components/Navbar';


const App = () => {
        return ( 
            <div>
                <h1>LOGIN</h1>
                <hr></hr>
                Welcome message goes here!
                <form>
                    <UsernameInput />
                    <PasswordInput />
                    <ResetPassword />
                    <RequestAccess />
                </form>
            </div>
            );
        };

ReactDOM.render( < App / > , document.querySelector(".container"));