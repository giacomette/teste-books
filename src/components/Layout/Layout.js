import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import { Wrapper } from './styles';

function Layout({ header, content }) {
  return (
    <React.Fragment>
      <Wrapper>
        <Header>{header}</Header>
        <Content>{content}</Content>
      </Wrapper>
    </React.Fragment>
  );
}

Layout.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node
};

export default Layout;
