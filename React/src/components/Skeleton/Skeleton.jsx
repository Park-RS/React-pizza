import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
		className='card__dough'
        width={280}
        height={459}
        viewBox="0 0 280 459"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="134" cy="128" r="128" />
        <rect x="55" y="273" rx="22" ry="22" width="155" height="27" />
        <rect x="0" y="318" rx="0" ry="0" width="280" height="85" />
        <rect x="0" y="424" rx="0" ry="0" width="93" height="30" />
        <rect x="127" y="418" rx="0" ry="0" width="147" height="39" />
    </ContentLoader>
);

export default Skeleton;
