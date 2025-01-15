import React, { useState } from "react";
import Button from "../../../components/Button/Button"; // Импортируем ваш компонент Button

const Filter = ({ onFilterChange }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="filter">
            <div className="filter__container">
                <Button className="filter__container-button" onClick={toggleDropdown}>
                    Фильтр
                </Button>
                <div className={`filter__container-dropdown${isDropdownVisible ? "-show" : ""}`}>
                    <ul className="filter__container-ul">
                        <li>
                            <Button
                                className="filter__container-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onFilterChange("desc"); 
                                    setDropdownVisible(false);
                                }}
                            >
                                Лайки ↑
                            </Button>
                        </li>
                        <li>
                            <Button
                                className="filter__container-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onFilterChange("asc"); 
                                    setDropdownVisible(false);
                                }}
                            >
                                Лайки ↓
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Filter;
