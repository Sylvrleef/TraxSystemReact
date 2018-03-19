import React from 'react';
import ReactDOM from 'react-dom';

import UsernameInput from './components/UsernameInput';
import PasswordInput from './components/PasswordInput';
import ResetPassword from './components/ResetPassword';
import RequestAccess from './components/RequestAccess';


const App = () => {
        return ( 
            <div>
                <h1>LOGIN</h1>
                <hr></hr>
                Welcome message goes here!
                <UsernameInput />
                <PasswordInput />
                <ResetPassword />
                <RequestAccess />
            </div>
            );
        };

ReactDOM.render( < App /> , document.querySelector(".container"));