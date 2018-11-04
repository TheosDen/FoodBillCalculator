import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';

const styles = theme => ({
    main: {
        marginTop: theme.spacing.unit * 8,
    },
});

const items = [
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
    { name: 'List item name', price: 20 },
];

function Main(props) {
    const { classes } = props;

    const listItems = items.map((item, index) =>
        <ListItem key={index}>{item.name} {index}</ListItem>
    );


    return (
        <section className={ classes.main }>
            <List>
                {listItems}
            </List>
        </section>
    );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);