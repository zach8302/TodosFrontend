import React, { Component } from 'react';
import Call from './Call';
import HomePage from './HomePage';
import JoinCallPage from './JoinCallPage';
import CreateCallPage from './CreateCallPage';
import CallPage from './CallPage';
import { HashRouter, BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom';


export default class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
        <HashRouter>
            <Routes>
                <Route exact path = "/" element={<HomePage/>}/>
                <Route exact path = '/join' element={<JoinCallPage/>}/>
                <Route exact path = '/create' element={<CreateCallPage/>}/>
                <Route exact path = '/call' element={<CallPage/>}/>
            </Routes>
        </HashRouter>;
    </div>);
  }
}


