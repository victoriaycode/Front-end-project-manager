import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';

import 'styles/globals.css';
import 'styles/tablausuarios.css';
import ProjectDashboard from 'pages/projects/ProjectDashboard';
import Project from 'pages/projects/Project';
import Profile from 'pages/my_profile/Profile';
import UsersDashboard from 'pages/users/UsersDashboard';
import AdvancesDashboard from 'pages/projects/advances/AdvancesDashboard';

import Students from 'pages/projects/Students';
import ProjectsList from 'components/ProjectsList';
import Advance from 'pages/projects/advances/Advance';


// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain='misiontic-concesionario.us.auth0.com'
      clientId='WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g'
      redirectUri='http://localhost:3000/admin'
      audience='api-autenticacion-concesionario-mintic'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='/' element={<Index />} />
              <Route path='/usuarios' element={<UsersDashboard />} />
              <Route path='/proyectos' element={<ProjectsList />} />
              <Route path='/proyectos/misproyectos' element={<ProjectDashboard />} />
              <Route path='/proyectos/proyecto' element={<Project />} />
              <Route path='/proyectos/proyecto/avances' element={<AdvancesDashboard />} />
              <Route path='/proyectos/proyecto/avances/avance' element={<Advance />} />
              <Route path='/proyectos/proyecto/info' element={<Project />} />
              <Route path='/proyectos/proyecto/estudiantes' element={<Students />} />
              
              <Route path='/mi_perfil' element={< Profile/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
