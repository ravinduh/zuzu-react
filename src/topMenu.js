import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  imgStyles: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '3%'
  },
  toolBarStyles: {
    height: 100
  }
};

function TopMenu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.toolBarStyles}>
          <img src="./images/logo.png"  className={classes.imgStyles}></img>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopMenu.propTypes = { 
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopMenu);