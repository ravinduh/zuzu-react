import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    homeStyle: {
        textAlign: 'left'
    }
  });

  function Home (props) {
    const {classes} = props;

    return (
        <div className={classes.homeStyle}>
          <h2>Home</h2>
        </div>
      );
  }


  export default withStyles(styles)(Home);