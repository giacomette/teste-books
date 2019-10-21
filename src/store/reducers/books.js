import {
  BOOKS_FETCH,
  BOOKS_SUCCESS,
  BOOKS_ERROR,
  BOOKS_UPDATE_FILTERS
} from '../actions/books';

const initialState = {
  isLoading: false,
  data: {
    items: [],
    total: 0
  },
  filters: {
    page: 1,
    perPage: 10
  },
  error: null
};

function books(state = initialState, action) {
  switch (action.type) {
    case BOOKS_UPDATE_FILTERS:
      return { ...state, filters: action.payload };

    case BOOKS_FETCH:
      return { ...state, isLoading: true };

    case BOOKS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };

    case BOOKS_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return { ...state };
  }
}

export default books;
