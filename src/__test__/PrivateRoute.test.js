import React from 'react';
import PrivateRoute from 'components/PrivateRoute';
import { render, screen, cleanup } from '@testing-library/react';
import { UserContext } from 'context/userContext';

afterEach(cleanup); 

it('Cuando los roles no corresponden ', () => {
  render(
    <UserContext.Provider value={{ userData: { rol: 'LIDER', estado:'AUTORIZADO' } }}>
      <PrivateRoute roleList={['ADMINISTRADOR']}>
        <div>Children</div>
      </PrivateRoute>
    </UserContext.Provider>
  );
  expect(screen.getByTestId('no-autorizado')).toHaveTextContent(
    'No estás autorizado para ver este sitio.'
  );
});

it(' Cuando esta a espera de autorizacion ', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'LIDER', estado:'NO_AUTORIZADO' } }}>
        <PrivateRoute roleList={['ADMINISTRADOR']}>
          <div>Children</div>
        </PrivateRoute>
      </UserContext.Provider>
    );
    expect(screen.getByTestId('espera-autorizacion')).toHaveTextContent(
      'En espera de autorización de administrador...'
    );
  });


it('Cuando el rol si corresponde y esta autorizado ', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR', estado:'AUTORIZADO' } }}>
        <PrivateRoute roleList={['ADMINISTRADOR']}>
          <div data-testid='children'>Children</div>
        </PrivateRoute>
      </UserContext.Provider>
    );
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });