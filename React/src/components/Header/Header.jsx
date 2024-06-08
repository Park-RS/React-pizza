import image1 from '../../assets/image1.svg';
import cart from '../../assets/cart.svg';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Search } from '../Search';
export default function Header({ searchValue, setSearchValue }) {
	const { items, totalPrice } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <div className="header__img">
                            <img src={image1} alt="logo" />
                        </div>
                        <div className="header__info">
                            <Link to="/" className="header__title">
                                Pizza Time
                            </Link>
                            <p className="header__text">самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                    {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
                    <Link to="/cart" className="header__button">
                        <div className="header__price">{totalPrice} ₽</div>
                        <div className="header__rectangle"></div>
                        <img className="header__cart" src={cart} alt="dasda" />
                        <div className="header__count">{totalCount}</div>
                    </Link>
                </div>
            </div>
            <div className="header__line"></div>
        </header>
    );
}
