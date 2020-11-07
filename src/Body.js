import React, {Component} from "react";
import {Route} from "react-router-dom";
import App from "./App.js";
import Left from "./Left.js";
import Header from "./Header.js";
//import $ from "jquery";
//import {} from "jquery.cookie";
//import map from "./map";//map그리는 page
//import LoginForm from "./loginForm"
//import naverlogin from "./naverlogin.js"

function SplitPane(props){
    return(
        <div className = "SplitPane">
            <div className="SplitPaneLeft">
                {props.left}
            </div>
            <div className="SplitPaneRight">
                {props.rigt}
            </div>
        </div>
    )
}
class Body extends Component{
    render(){
        return(
            <div>
            <SplitPane
                left = {<Left/>}
            />
            <div><Route exact path="/" component={App}></Route></div>
            </div>
        );
    }
}
export default Body;