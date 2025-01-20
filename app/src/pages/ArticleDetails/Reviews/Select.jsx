import React from 'react'


const Select = ({ children }) => {
    return (
        <select id="modalRating" name="rating" required>
            {children}
        </select>
    )
}

export default Select