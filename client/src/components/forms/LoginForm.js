import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, getUser } from '../../actions';

const Login = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <section className="login">
    <Form className="user-form">
      <div>
        { touched.email && errors.email && <p>{errors.email}</p>}
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
      </div>
      <div>
      { touched.password && errors.password && <p>{errors.password}</p>}
        <label htmlFor="password">Password</label>
        <Field type="password" name="password"/>
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  </section>
);

// Use Formik render prop instead and pass in loginUser function

const FormikForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(7, 'Password must be 7 characters or longer').required('Password is required')
  }),
  handleSubmit(values, {  props, resetForm, setErrors, setSubmitting }) {

    setTimeout(() => {
      if (values.email && values.password) {
        props.loginUser(values);
        resetForm();
      }
      setSubmitting(false);
    }, 2000);

  }
})(Login);

class LoginForm extends Component {

  handleLogin = values => {
    const { user, history, getToken, getUser } = this.props;

    axios.post('/api/login', values)
      .then(res => {
        getToken(res.data.token);
        getUser(res.data.user);
        const jwtToken = localStorage.setItem('jwtToken', JSON.stringify(res.data.token))
        history.push('/');
      });
  }
  
  render() {
    return (
      <Fragment>
        <FormikForm 
          loginUser={this.handleLogin}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
}

const mapDispatchToProps = {
  getToken,
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));