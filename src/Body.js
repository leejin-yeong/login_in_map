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
        /*let resultForm;
        function getResultForm(){
            if($.cookie("login_id")){ //login 가능하면 map이 있는 페이지로 보냄
                resultForm = <Route exact path="/" component={map}></Route>;
                return resultForm;
            }
            else{//login 불가능이면 다시 login page로 보냄
                resultForm = <Route exact path="/" component={LoginForm}></Route>;
                return resultForm;
            }
        }
        getResultForm();*/
        return(
            <div>
                <Route exact path="/" component={App}></Route>;
                {/*{resultForm} */}
            </div>
        );
    }
}

export default Body;