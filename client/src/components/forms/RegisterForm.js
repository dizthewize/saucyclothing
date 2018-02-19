import React, { Fragment } from 'react';
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Register = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form style={{textAlign: 'center', marginTop: '2rem'}}>
    <div>
      { touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
      <Field type="text" name="firstName" placeholder="First Name" />
    </div>
    <div>
      { touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
      <Field type="text" name="lastName" placeholder="Last Name" />
    </div>
    <div>
    { touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <div>
      { touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <button disabled={isSubmitting}>Submit</button>
  </Form>
);

// Use Formik render prop instead and pass in loginUser function

const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().trim().required('First name is required'),
    lastName: Yup.string().trim().required('Last name is required'),
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(7, 'Password must be 7 characters or longer').required('Password is required')
  }),
  handleSubmit(values, {  props, resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email && values.password && values.firstName && values.lastName) {
        props.registerUser(values);
        resetForm();
      }
      setSubmitting(false);
    }, 2000);

  }
})(Register);

const RegisterForm = (props) => {
  const { registerUser, history } = props;
  return (
    <Fragment>
      <FormikForm 
        registerUser={registerUser}
        history={history}
      />
    </Fragment>
  );
}

const mapStateToProps = ({ user }) => {
  return { user };
}

export default connect(mapStateToProps, actions)(withRouter(RegisterForm));