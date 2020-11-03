import React, {Component} from "react";
import {Route} from "react-router-dom";
import App from "./App.js";
//import $ from "jquery";
//import {} from "jquery.cookie";
//import map from "./map";//map그리는 page
//import LoginForm from "./loginForm"
//import naverlogin from "./naverlogin.js"

class Body extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={App}></Route>;
            </div>
        );
    }
}

export default Body;