import React from 'react';
import Header from './Header';
import Main from './Main';

const provider = {
    "id":4,
    "name":"Holiday (12-й)",
    "items":[]
};

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
        "weight":0,
        "category_id": 33,
    },
    {
        "id":39,
        "name":"Окрошка",
        "price":"32.00",
        "weight":0,
        "category_id": 33,
    },
    {
        "id":40,
        "name":"Борщ",
        "price":"25.00",
        "weight":0,
        "category_id": 33,
    },
    {
        "id":41,
        "name":"Шурпа",
        "price":"32.00",
        "weight":0,
        "category_id": 33,
    },
    {
        "id":42,
        "name":"Суп с фрикадельками",
        "price":"29.00",
        "weight":0,
        "category_id": 33,
    },
    {
        "id":43,
        "name":"Куриный бульон",
        "price":"27.00",
        "weight":0,
        "category_id": 33,
    },
    {
        "id":44,
        "name":"Тефтели в соусе",
        "price":"32.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":45,
        "name":"Свинная отбивная",
        "price":"39.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":46,
        "name":"Куриная отбивная",
        "price":"32.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":47,
        "name":"Куриный бефстроганов",
        "price":"31.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":48,
        "name":"Люля ассорти",
        "price":"35.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":49,
        "name":"Бедро на монгале",
        "price":"32.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":50,
        "name":"Куриный шашлык",
        "price":"33.00",
        "weight":0,
        "category_id": 34,
    },
    {
        "id":51,
        "name":"Картофель отварной с зел.",
        "price":"19.00",
        "weight":0,
        "category_id": 35,
    },
    {
        "id":52,
        "name":"Картофельное пюре",
        "price":"19.00",
        "weight":0,
        "category_id": 35,
    },
    {
        "id":53,
        "name":"Каша гречневая с грибами",
        "price":"22.00",
        "weight":0,
        "category_id": 35,
    },
    {
        "id":54,
        "name":"Рис с овощами",
        "price":"22.00",
        "weight":0,
        "category_id": 35,
    },
    {
        "id":55,
        "name":"Овощное рагу",
        "price":"22.00",
        "weight":0,
        "category_id": 35,
    },
    {
        "id":56,
        "name":"Макароны / спгетти",
        "price":"17.00",
        "weight":0,
        "category_id": 35,
    },
    {
        "id":57,
        "name":"Визави",
        "price":"23.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":58,
        "name":"Изюминка",
        "price":"24.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":59,
        "name":"Винегрет",
        "price":"18.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":60,
        "name":"Весна",
        "price":"17.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":61,
        "name":"Оливье",
        "price":"28.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":62,
        "name":"Пестрый",
        "price":"19.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":63,
        "name":"Домашний",
        "price":"25.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":64,
        "name":"Глазунья",
        "price":"27.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":65,
        "name":"Омлет с ветчиной",
        "price":"32.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":66,
        "name":"Блинчики с курицей и грибами",
        "price":"35.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":67,
        "name":"Блинчики с творогом",
        "price":"33.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":68,
        "name":"Сырники со сметаной",
        "price":"27.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":69,
        "name":"Узвар",
        "price":"12.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":70,
        "name":"Морс",
        "price":"13.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":71,
        "name":"Пепси",
        "price":"20.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":72,
        "name":"Сок",
        "price":"16.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":73,
        "name":"Хлеб",
        "price":"2.00",
        "weight":0,
        "category_id": 36,
    },
    {
        "id":74,
        "name":"Контейнер",
        "price":"3.00",
        "weight":0,
        "category_id": 36,
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            provider: null,
            categories: [],
            items: [],
            selectedCount: 0,
            selectedTotal: 0,
        };
    }

    componentDidMount() {
        // TODO: ajax loading
        setTimeout(() => {
            this.setState({
                provider: provider,
                categories: categories,
                items: items,
                selectedCount: 2,
                selectedTotal: 125,
            });
        }, 1500);
    }

    render() {
        return <div>
            <Header provider={this.state.provider} total={this.state.selectedTotal} totalCount={this.state.selectedCount} />
            <Main categories={this.state.categories} items={this.state.items} />
        </div>;
    }
}

export default App;