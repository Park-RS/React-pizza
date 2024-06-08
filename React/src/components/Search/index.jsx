import React from 'react';

import styles from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
    return (
        <input
            value={searchValue}
            placeholder="Поиск пиццы..."
            onChange={(event) => setSearchValue(event.target.value)}
            className={styles.root}
            type="text"
        />
    );
};
