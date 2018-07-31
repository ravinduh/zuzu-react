import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TopMenu from './topMenu';
import Home from './views/home.js'
import Boookings from './views/bookings.js'
import Hotels from './views/hotels.js'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
  menu: {
      height: '100%'
  },
  containerStyle: {
    marginTop: 80
  }
});


  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  );
  
  const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );

  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );

function LeftMenu(props) {
  const { classes } = props;

  return (
    <Router>
        <Grid container spacing={24} className={classes.containerStyle}>
            <Grid item xs={12}>
                <TopMenu />
            </Grid>
            <Grid item xs={2}>
                <Paper>
                    <MenuList className={classes.menu}>
                        <Link to="/">
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
                            </MenuItem>
                        </Link>
                        <Link to="/bookings">
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Bookings" />
                            </MenuItem>
                        </Link>
                        <Link to="/hotels">
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Hotels" />
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={10}>
                <Route exact path="/" component={Home} />
                <Route path="/bookings" component={Boookings} />
                <Route path="/hotels" component={Hotels} />
            </Grid>
        </Grid>
    </Router>
  );
}

LeftMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenu);