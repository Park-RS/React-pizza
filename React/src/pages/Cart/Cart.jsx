import React from 'react';
import minus from '../../assets/ellipse-minus.svg';
import plus from '../../assets/ellipse-plus.svg';
import cancel from '../../assets/ellipse-cancel.svg';
import cart from '../../assets/cart-in-cart.svg';
import trash from '../../assets/trash.svg';
import path from '../../assets/path.svg';
import pizzaTest from '../../assets/pizza_test.png';

import styles from './Cart.module.scss';

export const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <img src={cart} alt="" />
                        <h2>Корзина</h2>
                    </div>
                    <div className={styles.clear}>
                        <img src={trash} alt="" />
                        <h5>Очистить корзину</h5>
                    </div>
                </div>
                <ul>
                    <li className={styles.item}>
                        <img src={pizzaTest} alt="" />
                        <div className={styles.name}>
                            <h4>Сырный цыпленок</h4>
                            <span>тонкое тесто, 26 см.</span>
                        </div>
                        <img src={minus} className={styles.ellipse}></img>
                        <h4 className={styles.counter}>2</h4>
                        <img src={plus} className={styles.ellipse}></img>
                        <h4 className={styles.price}>770 ₽</h4>

                        <img src={cancel} className={styles.ellipse} alt="" />
                    </li>
                    <li className={styles.item}>
                        <img src={pizzaTest} alt="" />
                        <div className={styles.name}>
                            <h4>Сырный цыпленок</h4>
                            <span>тонкое тесто, 26 см.</span>
                        </div>
                        <img src={minus} className={styles.ellipse}></img>
                        <h4 className={styles.counter}>2</h4>
                        <img src={plus} className={styles.ellipse}></img>
                        <h4 className={styles.price}>770 ₽</h4>

                        <img src={cancel} className={styles.ellipse} alt="" />
                    </li>
                </ul>
                <div className={styles.info}>
                    <div>
                        Всего пицц: <span>3 шт.</span>
                    </div>
                    <div>
                        Сумма заказа: <span>900 ₽</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button >
                        <a href="/"> Вернуться назад</a>
                    </button>
                    <button>Оплатить сейчас</button>
                </div>
            </div>
        </div>
    );
};
