import BookService from '../../services/bookService';

export const BOOKS_FETCH = 'BOOKS_FETCH';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
export const BOOKS_ERROR = 'BOOK_ERROR';
export const BOOKS_UPDATE_FILTERS = 'BOOKS_UPDATE_FILTERS';

const bookService = new BookService();

export function fetchBooks() {
  return async (dispatch, getState) => {
    dispatch({
      type: BOOKS_FETCH
    });

    const {
      books: { filters }
    } = await getState();

    const result = await bookService.search(filters);

    dispatch({
      type: BOOKS_SUCCESS,
      payload: result
    });
  };
}

export function updateFilters(filters) {
  return async dispatch => {
    dispatch({
      type: BOOKS_UPDATE_FILTERS,
      payload: filters
    });
  };
}
