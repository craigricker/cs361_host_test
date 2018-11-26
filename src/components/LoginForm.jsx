import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import NameIcon from '@material-ui/icons/SupervisorAccount';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

const styles = theme => ({
  button: {
    margin: `${theme.spacing.unit * 2}px 0`,
    alignSelf: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
});

function LoginForm(props) {
  const {
    values: { email, password },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    classes
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    console.log(errors);
    setFieldTouched(name, true, false);
  };

  return (
    <form
      className={classes.container}
    >
      <TextField
        id='email'
        name='email'
        helperText={touched.email ? errors.email : ''}
        error={touched.email && Boolean(errors.email)}
        label='Email'
        fullWidth
        value={email}
        onChange={change.bind(null, 'email')}
      />
      <TextField
        id='password'
        name='password'
        helperText={touched.password ? errors.password : ''}
        error={touched.password && Boolean(errors.password)}
        label='Password'
        fullWidth
        type='password'
        value={password}
        onChange={change.bind(null, 'password')}
      />
      <Button
        type='submit'
        variant='raised'
        color='primary'
        disabled={!isValid}
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);