import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
    padding: "0 0 0 15"
  },
  link: {
    textDecoration: "none",
    '&:visited': {
      color: 'black'
   }
  },
  button: {
    color: 'white'
  }
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <ul>
          <List>
            <Link to="/" className={classes.link}>Home</Link>
          </List>
          <List>
            <Link to="/login" className={classes.link}>Log In</Link>
          </List>
          <List>
            <Link to="/register" className={classes.link}>Register</Link>
          </List>
        </ul>
      </div>
    );

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton 
                className={classes.menuButton}  
                onClick={this.toggleDrawer('left', true)} 
                color="inherit" 
                aria-label="Menu">
                  <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.grow}>
                Credible
              </Typography>
              <Link to="/login" className={classes.link}>
                <Button color="inherit" className={classes.button}>Login</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);