require('../css/app.scss');

import React from "react";
import ReactDOM from "react-dom";

import Header from './components/Header';
import Main from './components/Main';

ReactDOM.render(
    <div>
        <Header/>
        <Main/>
    </div>,
    document.getElementById("app")
);