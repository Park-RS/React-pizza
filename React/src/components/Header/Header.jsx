import image1 from '../../assets/image1.svg';
import cart from '../../assets/cart.svg';
export default function Header(params) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <div className="header__img">
                            <img src={image1} alt="logo" />
                        </div>
                        <div className="header__info">
                            <h3 className="header__title">Pizza Time</h3>
                            <p className="header__text">самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                    <button className="header__button">
                        <div className="header__price">520 ₽</div>
                        <div className="header__rectangle"></div>
                        <img className="header__cart" src={cart} alt="dasda" />
                        <div className="header__count">3</div>
                    </button>
                </div>
            </div>
            <div className="header__line"></div>
        </header>
    );
}
