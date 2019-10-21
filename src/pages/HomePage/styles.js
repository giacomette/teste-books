import styled from 'styled-components';
import { Spinner } from 'reactstrap';

export const SpinnerStyled = styled(Spinner)`
  position: absolute;
  margin-left: -20px;
  margin-top: -20px;
  left: 50%;
  top: 50%;
`;

export const ContentTable = styled.div`
  background: #fff;
  border-radius: 6px;
  border: 1px solid #efefef;
  margin-bottom: 15px;

  table {
    padding: 0 15px;
    th {
      border: none;
      font-size: 0.9em;
      font-weight: normal;
      color: #666;
    }
    td {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }

  button {
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media all and (max-width: 768px) {
    & {
      background-color: transparent !important;
      border-color: transparent !important;
    }
  }
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
  input {
    border: none;
    box-shadow: none;
  }

  button {
    background-color: #efefef !important;
    border-color: #efefef !important;
    color: #666 !important;
  }

  @media all and (max-width: 768px) {
    padding: 0px 15px;
    margin-top: 15px;
  }
`;

export const ContentDescription = styled.div`
  background: #efefef;
  padding: 15px;
  margin-top: 15px;
  border-radius: 6px;
`;
