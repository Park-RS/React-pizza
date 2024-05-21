import triangle from '../../assets/triangle.svg';
import React from 'react';

export default function Sort({ value, onChangeSort }) {
    const [open, setOpen] = React.useState(false);
    const sortList = [
        { name: 'популярности', sort: 'rating' },
        { name: 'цене', sort: 'price' },
        { name: 'алфавиту', sort: 'pizzaname' },
    ];
    const setItem = (index) => {
        onChangeSort(index);
        setOpen(false);
    };

    return (
        <div className="sort__variables">
            <div className="sort__svg">
                <img src={triangle} alt="" />
            </div>
            <div className="sort__text">
                Сортировка по: <span onClick={() => setOpen(!open)}>{value.name}</span>
            </div>
            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, index) => (
                            <li
                                onClick={() => setItem(obj)}
                                key={index}
                                className={value.sort === obj.sort ? 'choosen' : ''}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
