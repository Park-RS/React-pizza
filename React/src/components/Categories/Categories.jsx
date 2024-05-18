import { useState } from 'react';
import Sort from '../Sort/Sort';
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
                            <li
                                key={index}
                                onClick={() => chooseCategory(index)}
                                className={activeIndex === index ? 'active' : ''}>
                                {value}
                            </li>
                        ))}
                    </ul>
                    <Sort></Sort>
                </div>
            </div>
        </div>
    );
}
