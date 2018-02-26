import React, { Component } from 'react';
import { connect } from 'react-redux';

const AuthHOC = (WrappedComponent, reload) => {
  return class AuthHOC extends Component {

    componentWillReceiveProps (nextProps) {
      if (!nextProps.user) {
        
      }
    }
    

    render () {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = ({ user }) => ({
    user
  })
  
  return connect(mapStateToProps)(AuthHOC)
}


export default AuthHOC;