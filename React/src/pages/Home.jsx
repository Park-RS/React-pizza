import React from 'react';

import Categories from '../components/Categories/Categories';
import Card from '../components/Card/Card';
import Skeleton from '../components/Skeleton/Skeleton';
export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://fastapi-pizza-delivery.onrender.com/pizzas')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <Categories></Categories>

            <h1 className="pizza__title">Все пиццы</h1>
            <div className="pizza__inner">
                {isLoading
                    ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => <Card key={obj.id} {...obj} />)}
            </div>
        </>
    );
};
