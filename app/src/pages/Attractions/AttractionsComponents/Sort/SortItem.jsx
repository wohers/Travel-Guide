import React from 'react';

const SortItem = ({ children, dataCategory, onClick }) => {
    return (
        <li>
            <a
                href="#"
                className="sort__container-link"
                data-category={dataCategory}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
            >
                {children}
            </a>
        </li>
    );
};

export default SortItem;