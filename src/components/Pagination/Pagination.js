import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';

const PaginationComponent = ({ currentPage, perPage, total, onChangePage }) => {
  const paginations = [];
  const totalPages = total ? Math.ceil(total / perPage) : 0;

  if (!totalPages) return null;

  for (let page = 1; page <= totalPages; page++) {
    paginations.push(page);
  }

  return (
    <Pagination aria-label="Page navigation">
      <PaginationItem disabled={totalPages === 1 || currentPage === 1}>
        <PaginationLink first onClick={() => onChangePage(1)} />
      </PaginationItem>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          previous
          onClick={() => onChangePage(currentPage - 1)}
        />
      </PaginationItem>
      {paginations.map((page, key) => (
        <PaginationItem
          key={key}
          disabled={currentPage === page}
          className={currentPage === page ? 'active' : ''}
        >
          <PaginationLink onClick={() => onChangePage(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink next onClick={() => onChangePage(currentPage + 1)} />
      </PaginationItem>
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink last onClick={() => onChangePage(totalPages)} />
      </PaginationItem>
    </Pagination>
  );
};

PaginationComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired
};

export default PaginationComponent;
