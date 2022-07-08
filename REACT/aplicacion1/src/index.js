import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// esta importancion renderiza los compenentes
//el querySelector busca el id donde esta root
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);