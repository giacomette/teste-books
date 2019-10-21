import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, InputGroupAddon, InputGroup } from 'reactstrap';
import * as Actions from '../../../store/actions/books';
import { SearchBarWrapper } from '../styles';

function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector(({ books }) => books.filters);
  const isLoading = useSelector(({ books }) => books.isLoading);


  async function handleSearch() {
    await dispatch(Actions.updateFilters({ ...filters, page: 1 }));
    await dispatch(Actions.fetchBooks());
  }

  return (
    <SearchBarWrapper>
      <InputGroup>
        <Input
          onChange={ev =>
            dispatch(
              Actions.updateFilters({ ...filters, search: ev.target.value })
            )
          }
          onKeyDown={ev => {
            if (ev.keyCode === 13) {
              handleSearch();
            }
          }}
          value={filters.search}
          placeholder="Busque livros pelo titulo, autor ou ISBN"
        />
        <InputGroupAddon addonType="append">
          <Button disabled={isLoading} onClick={() => handleSearch()}>
            Buscar
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </SearchBarWrapper>
  );
}

export default SearchBar;
