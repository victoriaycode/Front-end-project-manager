import React from 'react';
import PrivateRoute from 'components/PrivateRoute';
import { render, screen, cleanup } from '@testing-library/react';
import { UserContext } from 'context/userContext';

afterEach(cleanup);

it('renders not authorized if the roles dont match', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'LIDER' } }}>
        <PrivateRoute roleList={['ADMINISTRADOR']}>
          <div>Este es el children</div>
        </PrivateRoute>
      </UserContext.Provider>
    );
    expect(screen.getByTestId('not-authorized')).toHaveTextContent(
      'No estás autorizado para ver este sitio.'
    );
  });
  
  
  it('renders not authorized if the state is NO_AUTORIZADO', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR', estado: 'NO_AUTORIZADO' } }}>
        <PrivateRoute roleList={['ADMINISTRADOR']}>
          <div>Este es el children</div>
        </PrivateRoute>
      </UserContext.Provider>
    );
    expect(screen.getByTestId('not-authorized')).toHaveTextContent(
      'No estás autorizado para ver este sitio.'
    );
  });

  
  it('renders the children if the user role is in the roleList and if the state is authorized', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR', estado: 'AUTORIZADO' } }}>
        <PrivateRoute roleList={['ADMINISTRADOR']}>
          <div data-testid='children'>Este es el children</div>
        </PrivateRoute>
      </UserContext.Provider>
    );
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });

  it('renders pending-approval if the state is PENDIENTE', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR', estado: 'PENDIENTE' } }}>
        <PrivateRoute roleList={['ADMINISTRADOR']}>
          <div>Este es el children</div>
        </PrivateRoute>
      </UserContext.Provider>
    );
    expect(screen.getByTestId('pending-approval')).toHaveTextContent(
      'En espera de autorización de administrador...'
    );
  });