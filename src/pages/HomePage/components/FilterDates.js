import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Input, FormGroup, Label } from 'reactstrap';
import * as Actions from '../../../store/actions/books';
import moment from 'moment';

const Content = styled.div`
  margin: 16px 0;
`;

const FilterDates = () => {
  const dispatch = useDispatch();

  const filters = useSelector(({ books }) => books.filters);
  const data = useSelector(({ books }) => books.data);

  const total = data.total || 0;

  async function onChange(prop, value) {
    await dispatch(
      Actions.updateFilters({
        ...filters,
        [prop]: value
      })
    );

    dispatch(Actions.fetchBooks());
  }

  const startYears = [];
  const endYears = [];

  for (let i = new Date().getFullYear(); i >= 1980; i--) {
    startYears.push(i + '-01-01');
    endYears.push(i + '-12-31');
  }

  console.log('filters', filters)

  return (
    <React.Fragment>
      <Content>
        <FormGroup row>
          <Label sm={3}>Filtrar ano de publicação</Label>

          <Col sm={2}>
            <Input
              type="select"
              onChange={ev => onChange('startDate', ev.target.value)}
            >
              <option value=""> --Ano de Inicio-- </option>

              {startYears.map((date, key) => (
                <option
                  disabled={
                    filters.endDate && moment(date).isAfter(filters.endDate)
                  }
                  key={key}
                  value={date}
                >
                  {moment(date).format('YYYY')}
                </option>
              ))}
            </Input>
          </Col>
          <Col sm={2}>
            <Input
              type="select"
              onChange={ev => onChange('endDate', ev.target.value)}
            >
              <option value=""> --Ano de Fim-- </option>

              {startYears.map((date, key) => (
                <option
                  disabled={
                    filters.startDate && moment(date).isBefore(filters.startDate)
                  }
                  key={key}
                  value={date}
                >
                  {moment(date).format('YYYY')}
                </option>
              ))}
            </Input>
          </Col>
          <Col sm={5} className="text-right">
            {total} resultado{total !== 1 ? 's' : ''} escontrado
            {total !== 1 ? 's' : ''}.
          </Col>
        </FormGroup>
      </Content>
    </React.Fragment>
  );
};

export default FilterDates;
