import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  Row,
  Col,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { ContentDescription } from '../styles';

const ModalDetails = ({ isOpen, onClose, book }) => {
  if (!book) return null;

  return (
    <React.Fragment>
      <Modal size="lg" isOpen={isOpen} fade={false} toggle={() => onClose()}>
        <ModalHeader>{book.title}</ModalHeader>
        <ModalBody>
          <Row>
            <Col sm={4}>
              <img
                className="img-fluid rounded"
                src={book.image}
                alt={book.title}
              />
            </Col>
            <Col sm={8}>
              <div>
                <div>
                  <strong>ISBN:</strong> {book.isbn.join(',')}
                </div>
                <div>
                  <strong>Autor:</strong> {book.author}
                </div>
                <div>
                  <strong>Editora:</strong> {book.publishingCompany}
                </div>
                <div>
                  <strong>Ano:</strong> {book.year}
                </div>
                <div>
                  <strong>Idioma:</strong> {book.language}
                </div>
                <div>
                  <strong>Peso em gramas:</strong> {book.weight}
                </div>
                <div>
                  <strong>Dimensões em cm:</strong> {book.dimensions}
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <ContentDescription>{book.description} </ContentDescription>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => onClose()}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

ModalDetails.propTypes = { 
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  book: PropTypes.object
};

export default ModalDetails;
