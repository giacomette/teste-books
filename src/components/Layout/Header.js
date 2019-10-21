import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container
} from 'reactstrap';
import logo from '../../assets/img/logo.svg';
import { WrapperHeader } from './styles';

function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <WrapperHeader>
      <Navbar expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} alt="Supero" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          {children ? (
            <HeaderContent isOpen={isOpen}>{children}</HeaderContent>
          ) : null}
        </Container>
      </Navbar>
    </WrapperHeader>
  );
}

function HeaderContent({ children, isOpen }) {
  if (!children) return null;

  return (
    <React.Fragment>
      <Collapse isOpen={isOpen} navbar>
        {children}
      </Collapse>
    </React.Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
