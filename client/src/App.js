import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div>
              <Switch>
                <Route path='/' component={Layout} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
