import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';

import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import Badge from '@material-ui/core/Badge/Badge';

const styles = theme => ({
    main: {
        marginTop: theme.spacing.unit * 8,
    },
    right: {
        textAlign: 'right',
    },
});

function Main(props) {
    const { classes } = props;

    const listItems = props.items.map((item) =>
        <ListItem key={item.id} button>
            <ListItemText primary={item.name} />
            <ListItemText secondary={item.price} className={classes.right} />


            <ListItemSecondaryAction style={ Math.round(Math.random()) ? { visibility: 'hidden' } : {} }>
                <IconButton aria-label="Comments">
                    <Badge badgeContent={1} color="secondary">
                        <DeleteIcon />
                    </Badge>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );

    const categoryItems = props.categories.map((item) =>
        <ListItem key={item.id}>
            <List subheader={<ListSubheader component="div">{item.name}</ListSubheader>}>
                {listItems}
            </List>
        </ListItem>
    );

    return (
        <section className={ classes.main }>
            <List>
                {categoryItems}
            </List>
        </section>
    );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
};

export default withStyles(styles)(Main);