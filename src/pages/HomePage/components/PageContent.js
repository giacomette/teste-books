import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../components/Pagination';
import * as Actions from '../../../store/actions/books';
import FilterDates from './FilterDates';
import ModalDetails from './ModalDetails';
import { ContentTable, SpinnerStyled } from '../styles';
import PageContentData from './PageContentData';

let widthWindow = window.outerWidth;

window.addEventListener('resize', function(e) {
  widthWindow = window.outerWidth;
});

const PageContent = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);
  const data = useSelector(({ books }) => books.data);
  const isLoading = useSelector(({ books }) => books.isLoading);
  const filters = useSelector(({ books }) => books.filters);

  async function changePage(page) {
    await dispatch(
      Actions.updateFilters({
        ...filters,
        page
      })
    );
    await dispatch(Actions.fetchBooks());
  }

  return (
    <React.Fragment>
      <FilterDates />

      <ModalDetails isOpen={!!book} book={book} onClose={() => setBook(null)} />

      <ContentTable widthWindow={widthWindow}>
        {isLoading ? <SpinnerStyled color="primary" /> : null}

        <PageContentData setBook={item => setBook(item)} />
      </ContentTable>

      <Pagination
        currentPage={filters.page}
        perPage={filters.perPage}
        total={data.total}
        onChangePage={page => changePage(page)}
      />
    </React.Fragment>
  );
};

export default PageContent;
