import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
        marginTop: theme.spacing.unit,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    homeStyle: {
        textAlign: 'left',
        padding: 10 
    }
});



class Bookings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: null
        };
    }

    componentDidMount () {
        axios.get('http://hms.zuzurooms.local:9005/todo/ravindu-react')
        .then((response) =>{
            console.log(response.data);
            const results = response.data;
            this.setState({
                tableData: results
            });
        })
        .catch((error)=> {
            console.log(error);
        });
    };

     
    render() {

        const { classes } = this.props;

        if(!this.state.tableData) {
            return(
            <div className={classes.homeStyle}>
                <h2>Loading...!!</h2>
            </div>
            )
        }
        else {
        return(
            <Paper className={classes.root}>
            <div className={classes.homeStyle}>
                <h2>Bookings</h2>
            </div>
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                <TableCell>Reservation number</TableCell>
                <TableCell>Booking user name</TableCell>
                <TableCell>Hotel name</TableCell>
                <TableCell>Booking checkin type</TableCell>
                <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.tableData.map(n => {
                return (
                    <TableRow key={n.ID}>
                    <TableCell component="th" scope="row">
                        {n.ReservationNumber}
                    </TableCell>
                    <TableCell>{n.BookingUserFirstName}</TableCell>
                    <TableCell>{n.HotelName}</TableCell>
                    <TableCell>{n.BookingCheckinType}</TableCell>
                    <TableCell>{n.CreatedDate}</TableCell>
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </Paper>
        )
    }
    }
}

Bookings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookings);

