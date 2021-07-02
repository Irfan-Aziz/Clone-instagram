import { fromUnixTime } from 'date-fns';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import FirebaseContext from './Context/firebase'
import {firebase,fieldValue} from './lib/firebase'
import './Styles/app.css'

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase,fieldValue}}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'));


