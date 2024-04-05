import triangle from '../../assets/triangle.svg';
export default function Categories(params) {
	return (
		<div className="sort">
                <div className="container">
                    <div className="sort__inner">
                        <ul className="sort__buttons">
                            <li className="sort__button">
                                Все
                            </li>
                            <li className="sort__button">
                                Мясная
                            </li>
                            <li className="sort__button">
                                Вегетарианская
                            </li>
                            <li className="sort__button">
                                Гриль
                            </li>
                            <li className="sort__button">
                                Острые
                            </li>
                            <li className="sort__button">
                                Закрытые
                            </li>
                        </ul>

                        <div className="sort__variables">
                            <div className="sort__svg">
                                <img src={triangle} alt="" />
                            </div>

                            <div className="sort__text">
                                Сортировка по: <span>популярности</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	)
};
