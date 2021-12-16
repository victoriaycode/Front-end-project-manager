import React from 'react';
import Title_page from 'components/Title_page';
import { render, screen, cleanup } from '@testing-library/react';
import { NavLink } from 'react-router-dom'

afterEach(cleanup);

it('renders okay', () => {
  render(<Title_page title={"Inicio"}/>);
  expect(screen.getByTestId('title-page')).toBeInTheDocument();
});

it('renders with props', () => {
    render(<Title_page title={"Inicio"} />);
    expect(screen.getByTestId('text-title')).toHaveTextContent('Inicio');
  });


