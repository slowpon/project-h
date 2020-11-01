import React, {Component} from "react";
import "./Login.css"
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import  * as actionCreators from './store/actionCreators';

class Login extends Component{
  render() {
    if (!this.props.login){
      return (
          <div className="login">
            <div className="login__img">
              <img src="/logo.png" alt=""/>
            </div>
            <div className="log__input">
              <input placeholder="ID" ref={(input) => {this.account = input}}/>
              <input placeholder="Password" type="password" ref={(input) => {this.password = input}}/>
            </div>
            <div className="log__button">
              <Button type="submit" onClick={() => this.props.click1(this.props.login, this.account,this.password)}>
                Sign in
              </Button>
              <Button type="submit" >
                Sign Up
              </Button>
            </div>
          </div>
      )
    }else {
      return <Redirect to='/'/>
    }

  }
}

// export default Login;
const mapStateToProps = (state) =>{
  return{
    // 第一个get('login')指的是login中的store中的reducer
    login: state.get('login').get('login')
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    click1(login,accountElem, passwordElem){
      if (!login){
        //dispatch(actionCreators.logIn());
        dispatch(actionCreators.getList(accountElem.value, passwordElem.value));
        console.log('logggg');
        console.log(accountElem);
      }
      else console.log('error');

    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
