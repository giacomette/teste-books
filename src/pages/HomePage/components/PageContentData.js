import React from 'react';
import { Table, Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSelector } from 'react-redux';

let widthWindow = window.outerWidth;

window.addEventListener('resize', function(e) {
  widthWindow = window.outerWidth;
});

const PageContentData = props => {
  const data = useSelector(({ books }) => books.data);

  return (
    <React.Fragment>
      {widthWindow > 768 ? (
        <Table hover>
          <thead>
            <tr>
              <th>Livro</th>
              <th>Autor</th>
              <th width={250}>Editora</th>
              <th width={80}>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, key) => (
              <tr key={key}>
                <td>
                  {item.title} <strong>({item.isbn.join(',')})</strong>
                </td>
                <td>{item.author}</td>
                <td>{item.publishingCompany}</td>
                <td>{item.year}</td>
                <td>
                  <Button color="primary" onClick={() => props.setBook(item)}>
                    Detalhes
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>
          {data.items.map((item, key) => (
            <Card key={key} style={{ marginBottom: 16 }}>
              <CardBody>
                <CardTitle>
                  <h5>{item.title}</h5>
                </CardTitle>
                <CardText>
                  <div>
                    <div>
                      <strong>ISBN:</strong> {item.isbn.join(',')}
                    </div>
                    <div>
                      <strong>Autor:</strong> {item.author}
                    </div>
                    <div>
                      <strong>Editora:</strong> {item.publishingCompany}
                    </div>
                    <div>
                      <strong>Ano:</strong> {item.year}
                    </div>
                  </div>
                </CardText>
                <Button
                  size="lg"
                  block
                  color="primary"
                  onClick={() => props.setBook(item)}
                >
                  Detalhes
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default PageContentData;
