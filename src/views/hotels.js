import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    homeStyle: {
        textAlign: 'left'
    }
  });

  function Hotels (props) {
    const {classes} = props;

    return (
        <div className={classes.homeStyle}>
          <h2>Hotels</h2>
        </div>
      );
  }


  export default withStyles(styles)(Hotels);