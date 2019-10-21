import React from 'react';
import Layout from './Layout';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Layout>', () => {
  it('deve renderizar sem haver alteração na estrutura do componente', () => {
    const component = renderer.create(<Layout />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('deve renderizar o conteudo do header caso exista', () => {
    const component = mount(<Layout header={<div>header</div>} />);

    const collapse = component.find('.navbar-collapse');

    expect(collapse.length).toBe(1);
  });

  it('não deve renderizar o conteudo do header caso não exista', () => {
    const component = mount(<Layout header={null} />);

    const collapse = component.find('.navbar-collapse');

    expect(collapse.length).toBe(0);
  });

  it('deve renderizar o conteudo do content do layout caso exista', () => {
    const component = mount(<Layout content={<div>content</div>} />);

    const content = component.find('.content-wrapper');

    expect(content.length).toBe(1);
  });

  it('não deve renderizar o conteudo do content do layout caso não exista', () => {
    const component = mount(<Layout content={null} />);

    const content = component.find('.content-wrapper');

    expect(content.length).toBe(0);
  });
});
