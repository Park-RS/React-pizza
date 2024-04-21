import triangle from '../../assets/triangle.svg';
import React from 'react';

export default function Sort(params) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const sortList = ['популярности', 'цене', 'алфавиту'];
    function setItem(index) {
        setSelected(index);
        setOpen(false);
    }

    return (
        <div className="sort__variables">
            <div className="sort__svg">
                <img src={triangle} alt="" />
            </div>
            <div className="sort__text">
                Сортировка по: <span onClick={() => setOpen(!open)}>{sortList[selected]}</span>
            </div>
            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((item, index) => (
                            <li
                                onClick={() => setItem(index)}
                                key={index}
                                className={selected === index ? 'choosen' : ''}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
