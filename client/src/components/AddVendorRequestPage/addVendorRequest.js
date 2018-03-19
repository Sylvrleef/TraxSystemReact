import React from 'react';
import ReactDOM from 'react-dom';

import ViewBtn from './components/ViewBtn';
import CancelBtn from './components/CancelBtn';
import RequestTable from './components/RequestTable';
import SecurityRole from './components/SecurityRole';
import HelloMsg from './components/HelloMsg';
import InitiatorNavbar from './components/InitiatorNavbar';


const App = () => {
        return ( 
            <div>
                form - 
                    * vendor name input required
                    * address line 1 input required
                    * address line 2 input optional
                    * city input required
                    * state dropdown required
                    * zip code input required
                    * phone input required format
                    * contact name input required
                    * email input optional format
                    * website input optional
                submit button
                cancel button
            </div>
            );
        };

ReactDOM.render( < App / > , document.querySelector(".container"));