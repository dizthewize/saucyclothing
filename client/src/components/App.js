import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import * as actions from '../actions';
import Layout from './Layout'
import NotFound from './NotFound';
import NavBar from './Navbar';
import DropMenu from './DropMenu';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import About from './About';
import LookBook from './LookBook';
import Footer from './Footer';
import Product from './Product';
import Cart from './Cart';

class App extends Component {

  componentDidMount() {
    const { user, getProducts, token, getUser } = this.props;
    getProducts();
    axios.post('/api/current_user', token)
      .then(res => {
        getUser(res.data.user)
      })
  }
  
  
  render() {
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
                <Route path='/register' component={RegisterForm}/>
                <Route path='/about' component={About}/>
                <Route exact path='/lookbook' component={LookBook}/>
                <Route path='/product/:id' component={Product}/>
                <Route path='/cart' component={Cart} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
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
