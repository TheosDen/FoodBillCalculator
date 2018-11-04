import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge/Badge';
import Button from '@material-ui/core/Button/Button';

import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    grow: {
        flexGrow: 1,
    },
    totalColor: {
        color: 'white',
    }
};

const provider = [
    {
        "id":4,
        "name":"Holiday (12-й)",
        "items":[]
    }
];

function Header(props) {
    const { classes } = props;
    return (
        <header>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Holiday
                    </Typography>
                    <Badge badgeContent={4} color="secondary">
                        <Typography color="inherit">
                            Total: 123.00
                        </Typography>
                    </Badge>
                </Toolbar>
            </AppBar>
        </header>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);