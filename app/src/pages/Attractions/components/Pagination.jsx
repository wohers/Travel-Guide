import React from 'react';
import Button from '../../../components/Button/Button';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <ul className="pagination" id="pagination">
      {[1, 2].map((page) => (
        <li key={page}>
          <Button
            className={`pagination-link-${currentPage === page ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
          >
            {page}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
