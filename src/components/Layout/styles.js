import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f9f9f9;
  height: 100vh;

  * {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const ComtentWrapper = styled.div``;

export const WrapperHeader = styled.div`
  .navbar {
    background: #ea6b39;
    padding: 12px 0;
  }

  img {
    width: 120px;
    filter: brightness(500%) grayscale(10%);
  }

  .navbar-toggler-icon:before {
    content: "\f0c9";
    color: white;
  }
`;
