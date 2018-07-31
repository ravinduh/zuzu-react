import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chipRed: {
      margin: theme.spacing.unit,
      background: '#c92d28'
    },
    chipGreen: {
        margin: theme.spacing.unit,
        background: '#1fa81f'
      },
      chipBlue: {
        margin: theme.spacing.unit,
        background: '#1a60ce'
      },
      chipYellow: {
        margin: theme.spacing.unit,
        background: '#ffd700'
      },
      chipOrange: {
        margin: theme.spacing.unit,
        background: 'orange'
      },
      chipLightBlue: {
        margin: theme.spacing.unit,
        background: '#719fe8'
      },
  });


function getBookingStatusText(statusId) {
    let text = "";
    if (statusId == 1) {
        text = 'Confirmed';
    } else if (statusId == 2) {
        text = 'Checked in';
    } else if (statusId == 3) {
            text = 'Checked out';
    } else if (statusId == 4) {
        text = 'Cancelled';
    } else if (statusId == 5) {
        text = 'Pending';
    } else if (statusId == 6) {
        text = 'Failed';
    } else if (statusId == 7) {
        text = 'No show';
    } else if (statusId == 8) {
        text = 'No show';
    } else if (statusId == 9) {
        text = 'Lapsed';
    } else if (statusId == 10) {
        text = 'Confirmed modify';
    } else if (statusId == 11) {
        text = 'Confirmed test';
    } else if (statusId == 12) {
        text = 'No show test';
    } else if (statusId == 13) {
        text = 'Checked in test';
    } else {
        text = 'Confirmed';
    }

    return text;
  };

function BookingStatus(props){
    const { classes, statusId } = props;

    let chip = '';
      if (statusId == 1) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipGreen} />);
      } else if (statusId == 2) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipLightBlue} />);
      } else if (statusId == 3) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipLightBlue} />);
      } else if (statusId == 4) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipRed} />);
      } else if (statusId == 5) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipYellow} />);
      } else if (statusId == 6) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipRed} />);
      } else if (statusId == 7) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipBlue} />);
      } else if (statusId == 8) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipGreen} />);
      } else if (statusId == 9) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipBlue} />);
      } else if (statusId == 10) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipYellow} />);
      } else if (statusId == 11) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipLightBlue} />);
      } else if (statusId == 12) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipBlue} />);
      } else if (statusId == 13) {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipBlue} />);
      } else {
        return (<Chip label={getBookingStatusText(statusId)} className={classes.chipLightBlue} />);
      }
      
  };



  export default withStyles(styles)(BookingStatus);