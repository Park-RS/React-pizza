import { useState } from 'react';
import Sort from '../Sort/Sort';
export default function Categories({ value, onClickCategory }) {
    console.log(value);

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
                        {categories.map((categoryName, index) => (
                            <li
                                key={index}
                                onClick={() => onClickCategory(index)}
                                className={value === index ? 'active' : ''}>
                                {categoryName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
