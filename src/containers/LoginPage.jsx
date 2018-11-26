import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import LoginForm from '../components/LoginForm';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`,
    width: '350px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
});

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('')
    .min(8, 'Password must contain atleast 8 characters')
    .required('Enter your password'),
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    const values = { email: '', password: '' };
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Log In</h1>
            <Formik
              render={props => <LoginForm {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
