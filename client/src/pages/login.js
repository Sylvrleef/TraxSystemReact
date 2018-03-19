import React from 'react';
import ReactDOM from 'react-dom';

import UsernameInput from '../components/LoginPage/UsernameInput';
import PasswordInput from '../components/LoginPage/PasswordInput';
import ResetPassword from '../components/LoginPage/ResetPassword';
import RequestAccess from '../components/LoginPage/RequestAccess';
import HelloMsg from "../components/HelloMsg";


const Login = () => {
        return ( 
            <div>
                <h1>LOGIN</h1>
                <hr></hr>
                <HelloMsg />
                <UsernameInput />
                <PasswordInput />
                <ResetPassword />
                <RequestAccess />
            </div>
            );
        };

export default Login;