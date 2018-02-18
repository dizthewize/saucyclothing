import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions';
import Layout from './Layout'
import NotFound from './NotFound'
import NavBar from './Navbar';
import DropMenu from './DropMenu';
import LoginForm from './LoginForm';

class App extends Component {

  componentDidMount() {
    const { getCustomers, adminUsers, getUser } = this.props;
    getCustomers();
    adminUsers();
    getUser();
  }

  render() {
    const { loginUser } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <DropMenu />
            <div>
              <Switch>
                <Route exact path='/' component={Layout} />
                <Route path='/login' component={LoginForm} />
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
