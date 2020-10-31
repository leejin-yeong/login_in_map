import React, {Component} from 'react';
//import ReactDOM from "react-dom";
//import header from "./Header.html"
import {BrowserRouter, Route} from "react-router-dom";

const Header = ()=>{
    return (
        <BrowserRouter>
        <div>
          <Route exact path="/" component={NaverLogin} />
          <Route path="/chat" component={Success} />
        </div>
      </BrowserRouter>
    )
}
var client_id = '8HkITidEmr1tQaw5jtAL'
var redirectURI = encodeURI("http://localhost:3000/chat")

class NaverLogin extends Component{
    componentDidMount() {
        var naver_id_login = new window.naver_id_login(client_id, redirectURI)
        var state = naver_id_login.getUniqState()
        naver_id_login.setButton("white", 2,40)
        naver_id_login.setDomain("http://localhost:3000/chat")
        naver_id_login.setState(state)
        naver_id_login.init_naver_id_login()
    }
    render(){
        return <div id="naver_id_login"></div>
    }
}
class Success extends React.Component {
    state = {
      nickname: ''
    }
    constructor(props) {
      super(props)
      window.naverSignInCallback = this.naverSignInCallback.bind(this)
    }
    naverSignInCallback() {
      var naver_id_login = new window.naver_id_login(client_id, redirectURI)
      this.setState({
        nickname: naver_id_login.getProfileData('email')
      })
    }
    componentDidMount() {
      var naver_id_login = new window.naver_id_login(client_id, redirectURI)
      console.log(naver_id_login.oauthParams.access_token)
      naver_id_login.get_naver_userprofile("naverSignInCallback()")
    }
    render() {
      return (
        <div>환영합니다 {this.state.nickname}님</div>
      )
    }
  }
export default Header;