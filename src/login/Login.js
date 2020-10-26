import React, {Component} from "react";
import "./Login.css"
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import  * as actionCreators from './store/actionCreators';

class Login extends Component{
  render() {
    return (
        <div className="login">
          <div className="login__img">
            <img
                src="/logo.png"
                alt=""
            />
          </div>
          <div className="log__input">
            <input placeholder="ID" type="text"/>
            <input placeholder="Password" type="text"/>
          </div>
          <Button type="submit"
                  onClick={this.props.click1}
                 >
            Sign in
          </Button>

          {!this.props.login ? (
              <>
                <Button type="submit" >
                  Sign1
                </Button>
              </>
          ) : (
              <>
                <Button type="submit" >
                  Sign Up2
                </Button>
              </>
          )}
        </div>
    )
  }
}

// export default Login;
const mapStateToProps = (state) =>{
  return{
    login: state.get('login').get('login')
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    click1(){
      dispatch(actionCreators.logIn());
      // console.log(this.props.login);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
