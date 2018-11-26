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

function RegisterForm(props) {
  const {
    values: { name, email, password, confirmPassword },
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
      onSubmit={() => {
        alert('submitted');
      }}
      className={classes.container}
    >
      <TextField
        id='name'
        name='name'
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
        label='Name'
        value={name}
        onChange={change.bind(null, 'name')}
        fullWidth
      />
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
      <TextField
        id='confirmPassword'
        name='confirmPassword'
        helperText={touched.confirmPassword ? errors.confirmPassword : ''}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        label='Confirm Password'
        fullWidth
        type='password'
        value={confirmPassword}
        onChange={change.bind(null, 'confirmPassword')}
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

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);