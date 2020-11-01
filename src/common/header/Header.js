import React, {Component} from "react";
import "./Header.css";
import {
  Add, ExpandMore,
  Flag, Forum,
  Home, NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle
} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
// import {Link} from 'react-router-dom'
// import * as actionCreators from "../../login/store/actionCreators";
import {connect} from "react-redux";
import  * as loginActionCreators  from '../../login/store/actionCreators';

class Header extends Component{
  render(){
    return <div className="header">
    <div className="header__left">

      <img src="/logo.png" alt="11"/>

      {/*<img*/}
      {/*  src="https://upload.wikimedia.org/*/}
      {/*  wikipedia/commons/thumb/5/51/*/}
      {/*  Facebook_f_logo_%282019%29.svg/*/}
      {/*  1200px-Facebook_f_logo_%282019%29.svg.png"*/}
      {/*  alt=""*/}
      {/*/>*/}
      <div className="header__input">
        <Search />
        <input placeholder="Search" type="text"/>
      </div>
    </div>

    <div className="header__center">
      <div className="header__option
      header__option--active">
        <Home fontSize="large" />
      </div>
      <div className="header__option">
        <Flag fontSize="large" />
      </div>
      <div className="header__option">
        <SubscriptionsOutlined fontSize="large" />
      </div>
      <div className="header__option">
        <StorefrontOutlined fontSize="large" />
      </div>
      <div className="header__option">
        <SupervisedUserCircle fontSize="large" />
      </div>
    </div>
    <div className="header__right">
      <div className="header__info">
        <Avatar />
        {
          this.props.login ?
              (<>
                {this.props.id}
                <Avatar />
                <h4 onClick={this.props.logout}>Log Out</h4>
              </>
              )
              :
              (<>
                <a href="/login">
                 <h4>Sign In</h4>
                </a>
                <Avatar />
                <h4 >Sign Up</h4>

              </>)
        }

      </div>

      <IconButton>
        <Add />
      </IconButton>
      <IconButton>
        <Forum/>
      </IconButton>
      <IconButton>
        <NotificationsActive />
      </IconButton>
      <IconButton>
        <ExpandMore />
      </IconButton>
    </div>
  </div>
  }
}

// export default Header;
const mapStateToProps = (state) =>{
  return{
    // 第一个get('login')指的是login中的store中的reducer
    login: state.get('login').get('login'),
    id: state.get('login').get('id')
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);