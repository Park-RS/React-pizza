import React from 'react';
import minus from '../../assets/ellipse-minus.svg';
import plus from '../../assets/ellipse-plus.svg';
import cancel from '../../assets/ellipse-cancel.svg';
import cart from '../../assets/cart-in-cart.svg';
import trash from '../../assets/trash.svg';
import path from '../../assets/path.svg';
import pizzaTest from '../../assets/pizza_test.png';
import { CartItem } from '../../components/CartItem';

import styles from './Cart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';

export const Cart = () => {
    const dispatch = useDispatch();
    const onClickClear = () => {
        dispatch(clearItems());
    };

    const { totalPrice, items } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <img src={cart} alt="" />
                        <h2>Корзина</h2>
                    </div>
                    <div className={styles.clear}>
                        <img onClick={onClickClear} src={trash} alt="" />
                        <h5>Очистить корзину</h5>
                    </div>
                </div>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </ul>
                <div className={styles.info}>
                    <div>
                        Всего пицц: <span>{totalCount} шт.</span>
                        
                    </div>
                    <div>
                        Сумма заказа: <span>{totalPrice} ₽</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button>
                        <a href="/"> Вернуться назад</a>
                    </button>
                    <button>Оплатить сейчас</button>
                </div>
            </div>
        </div>
    );
};
