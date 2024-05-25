import React from 'react';
import styles from '../pages/Cart/Cart.module.scss';
import minus from '../assets/ellipse-minus.svg';
import plus from '../assets/ellipse-plus.svg';
import cancel from '../assets/ellipse-cancel.svg';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

export const CartItem = ({ id, pizzaname, type, size, price, count, image }) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            }),
        );
    };
    const onClickMinus = () => {
        dispatch(minusItem(id));
    };
    const onClickRemove = () => {
        dispatch(removeItem(id));
    };
    return (
        <li className={styles.item}>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.name}>
                <h4>{pizzaname}</h4>
                <span>
                    {type}, {size} см.
                </span>
            </div>
            <img src={minus} onClick={onClickMinus} className={styles.ellipse}></img>
            <h4 className={styles.counter}>{count}</h4>
            <img src={plus} onClick={onClickPlus} className={styles.ellipse}></img>
            <h4 className={styles.price}>{price} ₽</h4>

            <img src={cancel} onClick={onClickRemove} className={styles.ellipse} alt="" />
        </li>
    );
};
