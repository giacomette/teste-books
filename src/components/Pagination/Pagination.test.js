import React from 'react';
import Pagination from './Pagination';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Pagination>', () => {
  it('deve haver alteração na estrutura do componente após um click', () => {
    let page = 1;

    const component = renderer.create(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={20}
        perPage={15}
      />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('deve criar 7 itens na paginação', () => {
    let page = 1;
    let total = 45;

    const component = mount(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={total}
        perPage={15}
      />
    );
    const pages = component.find('.page-item');

    // 3 paginas + 4 botões direcionais
    expect(pages.length).toBe(7);
  });

  it('deve haver somento um item em active', async () => {
    let page = 1;
    let total = 45;

    const component = await mount(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={total}
        perPage={15}
      />
    );

    expect(component.find('.active.page-item').length).toBe(1);
  });

  it('deve atualizar as props', () => {
    let page = 1;
    let total = 45;

    let component = mount(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={total}
        perPage={15}
      />
    );

    expect(component.props().currentPage).toBe(1);

    component.setProps({ currentPage: 2 });

    expect(component.props().currentPage).toBe(2);
  });

  it('deve trocar a pagina ativa ao mudar a propriedade currentPage', () => {
    let page = 1;
    const total = 45;

    const component = mount(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={total}
        perPage={15}
      />
    );

    component.setProps({ currentPage: 2 });

    const active = component.find('.active.page-item').text();

    expect(active).toBe('2');
  });

  it('não deve trocar a pagina ativa ao atribuir a propriedade currentPage o mesmo valor atual', () => {
    let page = 1;
    let total = 45;

    let component = mount(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={total}
        perPage={15}
      />
    );

    component.setProps({ currentPage: 1 });

    let active = component.find('.active.page-item').text();

    expect(active).toBe('1');
  });

  it('Deve dimunuir o numero de paginas ao diminuir ao atualizar a propriedade de total', () => {
    let page = 1;
    const total = 45;

    const component = mount(
      <Pagination
        currentPage={page}
        onChangePage={v => (page = v)}
        total={total}
        perPage={15}
      />
    );

    component.setProps({ total: 25 });

    const pages = component.find('.page-item');

    // 2 paginas + 4 botões direcionais
    expect(pages.length).toBe(6);
  });
});
