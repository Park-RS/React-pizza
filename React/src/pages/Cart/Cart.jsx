import React from "react";
import cart from "../../assets/cart-in-cart.svg";
import trash from "../../assets/trash.svg";
import { CartItem } from "../../components/CartItem";

import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../../redux/slices/cartSlice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, DialogContent, DialogActions, Button } from "@mui/material";

export const Cart = () => {
    const dispatch = useDispatch();
    const onClickClear = () => {
        dispatch(clearItems());
    };
    const { totalPrice, items } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const [open, setOpen] = React.useState(false);
    const [phone, setPhone] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');

    let order = {
        phone: phone,
        name: name,
        address: address,
        pizza: items,
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const makeOrder = () => {
        fetch("https://fastapi-pizza-delivery.onrender.com/orders/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(order),
        }).then((res) => {
            return res.json();
        });

        window.scrollTo(0, 0);
        handleClose();
    };

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
                    <button onClick={handleOpen}>Оплатить сейчас</button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Форма</DialogTitle>
                        <DialogContent style={{ width: "230px" }}>
                            <TextField
                                required
                                value={phone}
                                autoFocus
                                margin="dense"
                                id="outlined-error"
                                onChange={(event) => setPhone(event.target.value)}
                                label="Номер телефона"></TextField>
                            <TextField
                                required
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                                id="name"
                                margin="dense"
                                label="Имя"></TextField>
                            <TextField
                                required
                                onChange={(event) => setAddress(event.target.value)}
                                id="adress"
                                value={address}
                                margin="dense"
                                label="Адрес"></TextField>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Отменить</Button>
                            <Button onClick={makeOrder}>Сделать Заказ</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};
