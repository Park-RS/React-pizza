import plus from '../../assets/plus.svg';
import pizzaChiz from '../../assets/pizza-chiz.png';
export default function Card(props) {
	return (
		<div className="card">
                            <img src={pizzaChiz} alt="" />
                            <div className="card__title">{props.title}</div>
                            <div className="card__param">
                                <ul className="card__dough">
                                    <li className="card__item">тонкое</li>
                                    <li className="card__item">традиционное</li>
                                </ul>
                                <ul className="card__diameter">
                                    <li>26 см.</li>
                                    <li>30 см.</li>
                                    <li>40 см.</li>
                                </ul>
                            </div>
                            <div className="card__down">
                                <div className="card__price">от {props.price} ₽</div>
                                <button className="card__button">
                                    <img src={plus} alt="" />
                                    <div className="card__text">Добавить</div>
                                    <div className="card__ellipse">
                                        <div className="card__count">2</div>
                                    </div>
                                </button>
                            </div>
                        </div>
	)
	
};
