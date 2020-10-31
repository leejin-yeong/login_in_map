import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import Header from "./Header.js";
import Body from "./Body.js";

ReactDOM.render(
    <HashRouter> 
        <Header/>
        <Body/>
    </HashRouter>,
    document.querySelector('#container')
)