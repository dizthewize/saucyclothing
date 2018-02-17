import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from './actions';
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import NavBar from './components/Navbar';

class App extends Component {

  componentDidMount() {
    const { getCustomers, adminUsers, getUser } = this.props;
    getCustomers();
    adminUsers();
    getUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
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

function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, actions)(App);
