import React, {Component} from 'react';
import './App.css';
import Header from "./common/header/Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widgets from "./Widgets";
import Login from "./login/Login";
import CreatePost from "./post/CreatePost";
import { Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Route} from 'react-router-dom';
import PostDetail from "./post/PostDetail";

class App extends Component{
  render() {
    return (
        <Provider store={store}>
          <div className="app">
            <Header/>
            <BrowserRouter>
              <div>
                <Route path='/' exact render={()=>
                  <>
                    <div className="app__body">
                      <Sidebar/>
                      <Feed/>
                      <Sidebar/>
                      {/*<Widgets/>*/}
                    </div>
                  </>
                }>
                </Route>
                <Route path='/login' exact render={()=><Login/>}></Route>
                <Route path='/createPost' exact render={()=><CreatePost/>}></Route>
                <Route path='/postDetail' exact render={()=><PostDetail/>}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
    );
  }
}

export default App;
