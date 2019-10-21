import { searchBooks } from './db';

class BookService {
  async search(params) {
    return searchBooks(params);
  }
}

export default BookService;
