import React, {Component} from 'react';
import './App.css';
import Header from "./common/header/Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widgets from "./Widgets";
import Login from "./login/Login";
import { Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Route} from 'react-router-dom';

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
                      <Widgets/>
                    </div>
                  </>
                }>
                </Route>
                <Route path='/login' exact render={()=><Login/>}>
                </Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
    );
  }
}

export default App;
