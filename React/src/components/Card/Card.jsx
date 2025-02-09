import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem, removeItem } from '../../redux/slices/cartSlice';

export default function Card({ id, pizzaname, price, image, sizes, types }) {
    const dispatch = useDispatch();

    const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
    const [selectType, setSelectType] = useState('Тонкое');
    const [selectSize, setSelectSize] = useState('25');
    const [addPizza, setAddPizza] = useState(0);

    const addedCount = cartItem ? cartItem.count : 0;
    console.log(selectSize);
    console.log(selectType);
    const onClickAdd = () => {
        const item = {
            id,
            pizzaname,
            price,
            image,
            type: selectType,
            size: selectSize,
        };
        dispatch(addItem(item));
    };

    const addButton = () => {
        setAddPizza(addPizza + 1);
    };
    const pickType = (index) => {
        setSelectType(index);
    };
    const pickSize = (index) => {
        setSelectSize(index);
    };
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card__title">{pizzaname}</div>
            <div className="card__param">
                <ul className="card__dough">
                    {types.map((type) => (
                        <li key={type} onClick={() => pickType(type)} className={selectType === type ? 'selected' : ''}>
                            {type}
                        </li>
                    ))}
                </ul>

                <ul className="card__diameter">
                    {sizes.map((size) => (
                        <li key={size} onClick={() => pickSize(size)} className={selectSize === size ? 'selected' : ''}>
                            {size} см
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card__down">
                <div className="card__price">от {price} ₽</div>
                <button onClick={onClickAdd} className="card__button">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="rgb(235, 90, 30)"
                        />
                    </svg>

                    <div className="card__text">Добавить</div>
                    {addedCount > 0 && (
                        <div className="card__ellipse">
                            <div className="card__count">{addedCount}</div>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}
