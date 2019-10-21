import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/actions/books';
import Layout from '../../components/Layout';
import SearchBar from './components/SearchBar';
import PageContent from './components/PageContent';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchBooks());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Layout header={<SearchBar />} content={<PageContent />} />
    </React.Fragment>
  );
};

export default HomePage;
