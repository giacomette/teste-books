import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Renderiza sem dar erro', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
