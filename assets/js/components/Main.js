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

const categories = [
    {
        "id":33,
        "name":"Первые блюда"
    },
    {
        "id":34,
        "name":"Горячие блюда"
    },
    {
        "id":35,
        "name":"Мясо на мангале"
    },
    {
        "id":36,
        "name":"Гарниры"
    },
    {
        "id":37,
        "name":"Салаты"
    },
    {
        "id":38,
        "name":"Горячие закуски"
    },
    {
        "id":39,
        "name":"Напитки"
    },
    {
        "id":40,
        "name":"Другое"
    }
];

const items = [
    {
        "id":38,
        "name":"Министроне",
        "price":"27.00",
        "weight":0
    },
    {
        "id":39,
        "name":"Окрошка",
        "price":"32.00",
        "weight":0
    },
    {
        "id":40,
        "name":"Борщ",
        "price":"25.00",
        "weight":0
    },
    {
        "id":41,
        "name":"Шурпа",
        "price":"32.00",
        "weight":0
    },
    {
        "id":42,
        "name":"Суп с фрикадельками",
        "price":"29.00",
        "weight":0
    },
    {
        "id":43,
        "name":"Куриный бульон",
        "price":"27.00",
        "weight":0
    },
    {
        "id":44,
        "name":"Тефтели в соусе",
        "price":"32.00",
        "weight":0
    },
    {
        "id":45,
        "name":"Свинная отбивная",
        "price":"39.00",
        "weight":0
    },
    {
        "id":46,
        "name":"Куриная отбивная",
        "price":"32.00",
        "weight":0
    },
    {
        "id":47,
        "name":"Куриный бефстроганов",
        "price":"31.00",
        "weight":0
    },
    {
        "id":48,
        "name":"Люля ассорти",
        "price":"35.00",
        "weight":0
    },
    {
        "id":49,
        "name":"Бедро на монгале",
        "price":"32.00",
        "weight":0
    },
    {
        "id":50,
        "name":"Куриный шашлык",
        "price":"33.00",
        "weight":0
    },
    {
        "id":51,
        "name":"Картофель отварной с зел.",
        "price":"19.00",
        "weight":0
    },
    {
        "id":52,
        "name":"Картофельное пюре",
        "price":"19.00",
        "weight":0
    },
    {
        "id":53,
        "name":"Каша гречневая с грибами",
        "price":"22.00",
        "weight":0
    },
    {
        "id":54,
        "name":"Рис с овощами",
        "price":"22.00",
        "weight":0
    },
    {
        "id":55,
        "name":"Овощное рагу",
        "price":"22.00",
        "weight":0
    },
    {
        "id":56,
        "name":"Макароны / спгетти",
        "price":"17.00",
        "weight":0
    },
    {
        "id":57,
        "name":"Визави",
        "price":"23.00",
        "weight":0
    },
    {
        "id":58,
        "name":"Изюминка",
        "price":"24.00",
        "weight":0
    },
    {
        "id":59,
        "name":"Винегрет",
        "price":"18.00",
        "weight":0
    },
    {
        "id":60,
        "name":"Весна",
        "price":"17.00",
        "weight":0
    },
    {
        "id":61,
        "name":"Оливье",
        "price":"28.00",
        "weight":0
    },
    {
        "id":62,
        "name":"Пестрый",
        "price":"19.00",
        "weight":0
    },
    {
        "id":63,
        "name":"Домашний",
        "price":"25.00",
        "weight":0
    },
    {
        "id":64,
        "name":"Глазунья",
        "price":"27.00",
        "weight":0
    },
    {
        "id":65,
        "name":"Омлет с ветчиной",
        "price":"32.00",
        "weight":0
    },
    {
        "id":66,
        "name":"Блинчики с курицей и грибами",
        "price":"35.00",
        "weight":0
    },
    {
        "id":67,
        "name":"Блинчики с творогом",
        "price":"33.00",
        "weight":0
    },
    {
        "id":68,
        "name":"Сырники со сметаной",
        "price":"27.00",
        "weight":0
    },
    {
        "id":69,
        "name":"Узвар",
        "price":"12.00",
        "weight":0
    },
    {
        "id":70,
        "name":"Морс",
        "price":"13.00",
        "weight":0
    },
    {
        "id":71,
        "name":"Пепси",
        "price":"20.00",
        "weight":0
    },
    {
        "id":72,
        "name":"Сок",
        "price":"16.00",
        "weight":0
    },
    {
        "id":73,
        "name":"Хлеб",
        "price":"2.00",
        "weight":0
    },
    {
        "id":74,
        "name":"Контейнер",
        "price":"3.00",
        "weight":0
    }
];

function Main(props) {
    const { classes } = props;

    const listItems = items.map((item) =>
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

    const categoryItems = categories.map((item) =>
        <ListItem key={item.id}>
            <List component="nav" subheader={<ListSubheader component="div">{item.name}</ListSubheader>}>
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
};

export default withStyles(styles)(Main);