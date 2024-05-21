import React from 'react';

import Categories from '../components/Categories/Categories';
import Card from '../components/Card/Card';
import Skeleton from '../components/Skeleton/Skeleton';
import Sort from '../components/Sort/Sort';
export const Home = () => {
    const [selected, setSelected] = React.useState(0);

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sort, setSort] = React.useState({
        name: 'популярности',
        sort: 'rating',
    }
);

    React.useEffect(() => {
        setIsLoading(true);
        if (categoryId == 0) {
            fetch(`https://fastapi-pizza-delivery.onrender.com/pizzas/?sort_by=${sort.sort}&order=asc`)
                .then((res) => {
                    return res.json();
                })
                .then((arr) => {
                    setItems(arr);
                    setIsLoading(false);
                });
            window.scrollTo(0, 0);
        } else {
            fetch(`https://fastapi-pizza-delivery.onrender.com/categories/${categoryId}?sort_by=${sort.sort}&order=asc`)
                .then((res) => {
                    return res.json();
                })
                .then((arr) => {
                    setItems(arr);
                    setIsLoading(false);
                });
            window.scrollTo(0, 0);
        }
    }, [categoryId, sort]);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}></Categories>
                <Sort value={sort} onChangeSort={(id) => setSort(id)}></Sort>
            </div>

            <h1 className="pizza__title">Все пиццы</h1>
            <div className="pizza__inner">
                {isLoading
                    ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => <Card key={obj.id} {...obj} />)}
            </div>
        </>
    );
};
