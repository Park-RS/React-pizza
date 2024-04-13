import { useState } from 'react';
import triangle from '../../assets/triangle.svg';
export default function Categories(params) {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    function chooseCategory(index) {
        setActiveIndex(index);
        console.log(activeIndex);
    }
    return (
        <div className="sort">
            <div className="container">
                <div className="sort__inner">
                    <ul className="sort__buttons">
                        {categories.map((value, index) => (
                            <li onClick={() => chooseCategory(index)} className={activeIndex === index ? 'active' : ''}>
                                {value}
                            </li>
                        ))}
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
    );
}
