import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

function Content({ children }) {
  if (!children) return null;

  return (
    <div className="content-wrapper">
      <Container>{children}</Container>
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
